function fn(arg: { x: string | null }) {
    if (arg.x !== null) {
        alert(arg);
        console.log(arg.x.substr(3)); //1. 这里的arg.x被设置为null了，所以这里会导致runtime error
    }
}
function alert(a:any) {
    a.x = null;
}

function fn(arg: { x: string | null }) {
    if (arg.x !== null) {
        alert(arg); // alert is pure here，so art.x.substr is safe
        console.log(arg.x.substr(3));
    }
}
// 假想的语法，没有支持
pure function alert(a:any)  {
   console.log('a:',a);
}
