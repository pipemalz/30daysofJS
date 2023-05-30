function addTogether(...args) {
    if(args.length === 2){
        if(args.every(arg=>Number.isInteger(arg))) return args[0] + args[1]
        return undefined;
    }else{
        if(Number.isInteger(args[0])){
            return n =>{
                return Number.isInteger(n) ? n+args[0] : undefined
            }
        };
        return undefined;
    }
}

console.log(addTogether(2)([3]))
