

type Tree = TreeNode | Empty | Leaf;
type Empty = {
  kind: 'empty'
}
type TreeNode = {
  kind: 'node',
  left: Tree,
  val: number;
  right: Tree
}
type Leaf = {
  kind: 'leaf',
  val: number
}

export function depth(tree: Tree):number{
  switch(tree.kind){
    case 'empty': return 0;
    case 'node': return 1 + Math.max(depth(tree.left) + depth(tree.right))
    case 'leaf': return 1;
  }
}
export function sum(tree: Tree): number{
  switch(tree.kind){
    case 'empty': return 0;
    case 'node': return tree.val + sum(tree.left) + sum(tree.right)
    case 'leaf': return tree.val
  }
}
const root: Tree = {
  kind: 'node',
  val: 1,
  left: {
    kind: 'node', 
    val: 2,
    left: {
      kind: 'leaf',
      val: 3
    },
    right: {
      kind: 'leaf',
      val:4
    }
  },
  right: {
    kind: 'empty'
  }
}
console.log(depth(root))
console.log(sum(root))