function add(x:string,y:string):string;
function add(x:number, y:number):number;


function add(x:string|number, y: number|string): number | string{
  if(typeof x === 'string'){
    return x + ',' + y;
  }else {
    return x.toFixed() + (y as number).toFixed(); 
  }
}
let x = add(1,2) // string
let y = add(2,3) // number
let z = add(10, "10")
let t = add("10", 20) 

