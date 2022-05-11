function receivesAFunction(callback) {
    return callback()
}


function returnsANamedFunction() {
    return function someFunction() {
        console.log('Hi!');
    }
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log('🤫');
    }
}