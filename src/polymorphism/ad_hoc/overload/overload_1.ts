function add(x:string,y:string):string;
function add(x:number, y:number):number;
function add(x:string|number|Function, y: number|string): number | string{
  if(typeof x === 'string'){
    return x + ',' + y;
  }else {
   return 1;
  }
}
add(1,2)
add(() => {},1)  // 报错，implementation的signature不可见，即使implementation的signaure定义了function但是overload没定义，所以type check error

export default undefined; // 为了避免各个ts之间互相影响