const execute = require('../');

function f1 (a) {
    console.log('This function takes a single argument: ', a);
}
function f2 (...args) {
    console.log('This function takes an array of arguments: ', args);
    console.log.apply(null, ['This is every argument on its own: '].concat(args));
}
function f3 (a, b, c) {
    console.log('This function takes exactly 3 arguments: ', a, b, c);
}
function f4 (a) {
    console.log('This function does not return a Promise');
    return a;
}
function f5 (a) {
    console.log('This function does return a resolved Promise');
    return Promise.resolve(console.log(a));
}

function f6 (a) {
    console.log('This function does return a handled rejected Promise');
    return Promise.reject(new Error('Test error, argument: ' + a))
        .catch(handler);
}

function handler(e) {
    console.log(e);
}

function* g0 () {
    yield 1;
    yield 2;
    yield 3;
}

function* g1 () {
    yield [1, 2, 3];
    yield [4, 5, 6];
}

function* g2 () {
    yield { a: 'a' };
}



execute(f1, g0(), 100)
    .then(() => execute(f2, g1()))
    .then(() => execute(f3, g1()))
    .then(() => execute(f4, g2()))
    .then(() => execute(f6, g2()))
    .then(() => execute(f5, g2()));


