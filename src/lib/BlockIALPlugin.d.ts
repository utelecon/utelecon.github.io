import type { Node } from "unist";
import type { Properties } from "hast";
import type { Processor } from "unified";

interface ShorthandAttribute {
  type: "#" | ".";
  ident: string;
}

interface FullAttribute {
  name: string;
  value: string;
}

interface IALData extends Properties {
  id?: string;
  className?: string[];
}

interface MdastData {
  id?: string;
  hProperties?: IALData;
}

interface IAL extends Node {
  type: "ial";
  data?: IALData;
}

export type MdastNode = Node<MdastData>;

export declare module "mdast" {
  interface StaticPhrasingContentMap {
    ial: IAL;
  }
}

export declare module "mdast-util-from-markdown" {
  interface CompileData {
    ial?: IALData;
    ialShorthandAttribute?: ShorthandAttribute;
    ialFullAttribute?: FullAttribute;
  }
}

export default function blockIALPlugin(this: Processor): void;
