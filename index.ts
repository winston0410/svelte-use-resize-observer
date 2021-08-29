//  Taken from this repo, as these types should be merged to core later
//  https://github.com/paolotiu/svelte-useactions/blob/main/src/index.ts
/**
 * The return type of an action.
 */
export type ActionReturn<Params> = {
  destroy?: () => void;
  update?: (params: Params) => void;
} | void;

/**
 * Action type shim
 */
export type ActionLike<Node extends HTMLElement> = (node: Node, params: any) => any;

/**
 * A primitive Action
 */
export type Action<Node extends HTMLElement = HTMLElement, Params extends any = undefined> = (
  node: Node,
  params?: Params
) => ActionReturn<Params>;

const resizeObserver: Action = (node) => {
  const ro = new ResizeObserver((entries, observer) => {
    node.dispatchEvent(new CustomEvent('resize', { detail: {entries, observer} }))
  });

  ro.observe(node);

  return {
    destroy() {
      ro.disconnect();
    }
  }
}

export default resizeObserver
