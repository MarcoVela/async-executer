"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
function execute(f, gen, timeout = 0) {
    let { value, done } = gen.next();
    if (done)
        return Promise.resolve();
    if (!(value instanceof Array))
        value = [value];
    return Promise.resolve(f.apply(null, value))
        .finally(() => wait(timeout))
        .then(() => execute(f, gen, timeout));
}
exports.default = execute;
//# sourceMappingURL=executer.js.map