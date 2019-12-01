function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default function execute(f: (arg: any) => Promise<void> | any, gen: Iterator<any>, timeout = 0): Promise<void> {
    let { value, done } = gen.next();
    if (done) return Promise.resolve();
    return Promise.resolve(f.call(null, value))
        .finally(() => wait(timeout))
        .then(() => execute(f, gen, timeout));
}

