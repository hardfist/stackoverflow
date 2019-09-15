interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}

function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}


function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    else {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}