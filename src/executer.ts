function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default function execute(f: (...arg: any[]) => Promise<void> | any, gen: Iterator<any> | IterableIterator<any> | Iterable<any>, timeout = 0): Promise<void> {
    const it = Symbol.iterator in Object(gen) ? Object(gen)[Symbol.iterator]() : gen;
    let result: IteratorResult<any> = it.next();
    if (result.done) return Promise.resolve();
    const value = result.value instanceof Array ? (f.length !== 1 ? result.value : [result.value]) : [result.value];
    return Promise.resolve(f.apply(null, value))
        .finally(() => wait(timeout))
        .then(() => execute(f, it, timeout));
}

