

type Expr = Add | Mult | Num 
type Num = {
  kind: 'num',
  val: number
}
type Add = {
  kind: 'add',
  left: Expr,
  right: Expr
}
type Mult = {
  kind: 'mult',
  left: Expr,
  right: Expr
}

function add(left: Expr, right: Expr){
  return {
    kind: 'add',
    left,
    right
  } as const;
}
function mult(left: Expr, right: Expr){
  return {
    kind: 'mult',
    left,
    right
  } as const;
}
function num(val: number){
  return {
    kind: 'num',
    val
  } as const;
}

export function eval_expr(expr: Expr): number{
  switch(expr.kind){
    case 'num': return expr.val;
    case 'add': return eval_expr(expr.left) + eval_expr(expr.right);
    case 'mult': return eval_expr(expr.left) * eval_expr(expr.right)
  }
}


console.log(eval_expr(
  add(
    mult(
      num(1), 
      num(2)
    ), 
    mult(
      num(3),
      num(4)
    )
  )
));