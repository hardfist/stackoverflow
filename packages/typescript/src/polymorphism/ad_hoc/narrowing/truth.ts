function printAll(strs: string | string[] | null|undefined) {
    if (strs) {
      if(typeof strs === 'object'){ // 这里的strs被收敛到truthy value即 string | string[]
        for (const s of strs) {
            console.log(s)
        }
     }
    }
    // 由于""为string但是为falsy，所以这里的str为string | null | undefined
    else if (typeof strs === "string") {
        console.log(strs)
    }
}