# トレーリングスラッシュの付与前後でリンク切れが起きているページの違いを確認するスクリプト
# npm run build の後に各ブランチで以下を実行しておく必要がある
# On master branch: node scripts/broken-link.js > broken-link-master.txt
# On working branch: node scripts/broken-link.js > broken-link-new.txt
def main():
    pages_with_broken_link_master = get_pages_with_broken_link("broken-link-master.txt")
    pages_with_broken_link_new = get_pages_with_broken_link("broken-link-new.txt")

    before_set = set(pages_with_broken_link_master)
    after_set = set(pages_with_broken_link_new)

    diff_set = after_set - before_set

    print(f"トレーリングスラッシュ統一後でのみリンク切れがあるページ：{len(diff_set)}件")
    for page in diff_set:
        print(page)

    diff_set = before_set - after_set

    print(f"masterでのみリンク切れがあるページ：{len(diff_set)}件")
    for page in diff_set:
        print(page)


def get_pages_with_broken_link(result_file_path):
    """
    リンク切れが起きているページをbroken-link.jsの実行結果から取得する
    """
    pages = []
    with open(result_file_path, "r") as f:
        line = f.readline()
        while line:
            page, href = line.split(" -> ")
            # コロンより後を削除
            page = page.split(":", 1)[0]
            # トレーリングスラッシュ付きのURLに統一
            page = page.replace("index.html", "")
            page = page.replace(".html", "/")
            pages.append(page)
            line = f.readline()
    return pages


if __name__ == "__main__":
    main()
