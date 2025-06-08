// 内部リンクの末尾にトレーリングスラッシュを付与するスクリプト
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

// URLのパス部分とアンカー部分を分離する関数
function splitPathAndAnchor(url: string): { path: string; anchor: string | null } {
  const hashIndex = url.indexOf('#');
  if (hashIndex === -1) {
    return { path: url, anchor: null };
  }
  return {
    path: url.substring(0, hashIndex),
    anchor: url.substring(hashIndex)
  };
}

// URLにスラッシュを追加する関数
function addTrailingSlash(url: string): string {
  // パス部分と可能性のあるアンカー部分を分離
  const { path: urlPath, anchor } = splitPathAndAnchor(url);
  
  // ファイル拡張子、クエリパラメータがある場合や、
  // すでにスラッシュで終わっている場合は処理しない
  if (
    /\.[a-zA-Z0-9]+$/.test(urlPath) || 
    urlPath.includes('?') || 
    urlPath.endsWith('/')
  ) {
    return url;
  }
  
  // スラッシュを追加してアンカーも戻す
  return anchor ? `${urlPath}/${anchor}` : `${urlPath}/`;
}

// 内部リンクを判定する関数
function isInternalLink(url: string): boolean {
  // 絶対URLの場合、サイトのドメインと一致するか確認
  if (/^https?:\/\//.test(url)) {
    return url.includes('utelecon.adm.u-tokyo.ac.jp');
  }
  
  // 相対URLの場合（/から始まるか、./や../で始まるか、文字から始まる）
  return /^\/[^/]|^\.\/|^\.\.\/|^[^/:#?]/.test(url) && !url.startsWith('mailto:');
}

// マークダウンリンクを処理する正規表現
const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

// HTMLリンクを処理する正規表現
const htmlLinkRegex = /href=["']([^"']+)["']/g;

async function processFile(filePath: string): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // 更新されたコンテンツ
    let updatedContent = content;
    
    // マークダウンリンクを処理
    updatedContent = updatedContent.replace(mdLinkRegex, (match, text, url) => {
      if (isInternalLink(url)) {
        // トレーリングスラッシュを追加（相対パスはそのままで）
        const processedUrl = addTrailingSlash(url);
        return `[${text}](${processedUrl})`;
      }
      return match;
    });
    
    // HTMLリンクを処理
    updatedContent = updatedContent.replace(htmlLinkRegex, (match, url) => {
      if (isInternalLink(url)) {
        // トレーリングスラッシュを追加（相対パスはそのままで）
        const processedUrl = addTrailingSlash(url);
        return `href="${processedUrl}"`;
      }
      return match;
    });
    
    // ファイルが変更された場合のみ書き込み
    if (content !== updatedContent) {
      await fs.writeFile(filePath, updatedContent, 'utf-8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function main() {
  // 処理対象ファイルを検索
  const files = await glob('{src/pages/**/*.{md,mdx,astro},src/components/**/*.{md,mdx,astro}}', { ignore: 'node_modules/**' });
  
  // 各ファイルを並行処理
  await Promise.all(files.map(processFile));
  
  console.log(`All files processed successfully! Processed ${files.length} files.`);
}

main().catch(console.error);