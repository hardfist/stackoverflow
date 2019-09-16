

type Tree = TreeNode | Empty;
type Empty = {
  kind: 'empty'
}
type TreeNode = {
  kind: 'node',
  left: Tree,
  right: Tree
}
const root: Tree = {
  kind: 'node',
  left: {
    kind: 'node', 
    left: {
      kind: 'empty'
    },
    right: {
      kind: 'empty'
    }
  },
  right: {
    kind: 'empty'
  }
}

export function depth(tree: Tree):number{
  if(tree.kind === 'empty'){
    return 0;
  }else{
    return 1 + Math.max(depth(tree.left), depth(tree.right))
  }
}


console.log(depth(root))