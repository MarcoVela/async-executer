"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
function execute(f, gen, timeout = 0) {
    const it = Symbol.iterator in Object(gen) ? Object(gen)[Symbol.iterator]() : gen;
    let result = it.next();
    if (result.done)
        return Promise.resolve();
    const value = result.value instanceof Array ? (f.length !== 1 ? result.value : [result.value]) : [result.value];
    return Promise.resolve(f.apply(null, value))
        .finally(() => wait(timeout))
        .then(() => execute(f, it, timeout));
}
exports.default = execute;
//# sourceMappingURL=executer.js.map