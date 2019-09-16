function assign(x:{name: string}, y:{age: number}){
  return Object.assign({},x,y);
}
const x = {name: 'yj'}
const y = {age: 20, name: 'override'}
assign(x, y) //我们不希望x的name被y的name覆盖掉，所以期望这里ts报错

assign(x,{age: 20, name: 'override'})

export default undefined;