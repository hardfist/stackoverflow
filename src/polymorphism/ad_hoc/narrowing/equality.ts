function foo(x: string | number, y: string | boolean) {
    if (x === y) {
        // 通过相等判定，x和y只能都为string
        x.toUpperCase();
        
        y.toLowerCase();
        
    }
    else {
        console.log(x);
                    
        console.log(y);
                    
    }
}