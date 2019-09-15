function add(x:string,y:string):string;
function add(x:number, y:number):number; // 报错，implementation没有实现该overload signatue

function add(x:string, y: number|string): number | string{
  if(typeof x === 'string'){
    return x + ',' + y;
  }else {
   return 1;
  }
}
add(1,2)

export default undefined;