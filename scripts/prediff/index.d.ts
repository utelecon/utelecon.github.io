import type { Node as UnistNode } from "unist";
import type { Content, Element } from "hast";
import type { Options } from "unist-util-remove";
import type { BuildVisitor } from "unist-util-visit";

export type TestFunction<Node extends UnistNode> = (
  ...args: Parameters<BuildVisitor<Node>>
) => boolean | undefined | void;

declare module "unist-util-remove" {
  export function remove<Node extends UnistNode>(
    node: Node,
    test?: TestFunction<Node>
  ): void;
}

declare module "hast-util-select" {
  export function matches(
    selector: string,
    node: Content | null | undefined
  ): node is Element;
}
