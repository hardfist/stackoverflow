function padLeft(padding: number | string, input: string) {
    return new Array(padding + 1).join(" ") + input; // 报错，string + 1 不合法
}

function padLeft2(padding: number | string, input: string) {
    if(typeof padding === 'number'){
        // 这里的padding的类型被narrowing 为number
        return new Array(padding + 1).join(" ") + input; 
    }else{
        return padding + input;
    }
    
}
