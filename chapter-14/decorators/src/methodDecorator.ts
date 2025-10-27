type Config = {
    label?: string,
    time?: boolean,
    replacement?: Function
}

const timings = new Map<string, { count: number, elapsed: number }>();

export function writeTimes() {
    [...timings.entries()].forEach(t => {
        const average = (t[1].elapsed / t[1].count).toFixed(2);
        console.log(`${t[0]}, count: ${t[1].count}, time: ${average}ms`);
    });
}

export function time(config?: Config) {
    return function <This, Args extends any[], Result extends string | number>(
        method: (This, Args) => Result,
        ctx: ClassMethodDecoratorContext<This, (This, Args) => Result>) {

        let start: number;
        ctx.addInitializer(() => start = performance.now());
        const methodName = config?.label ?? String(ctx.name);

        return function (this: This, ...args: Args) {
            start = performance.now();

            let result: Result;

            if (config?.replacement) {
                result = config.replacement.call(this, ...args);
            } else {
                result = method.call(this, ...args);
            }

            if (config?.time) {
                const duration = (performance.now() - start);
                if (timings.has(methodName)) {
                    const data = timings.get(methodName);
                    data.count++;
                    data.elapsed += duration;
                } else {
                    timings.set(methodName, { count: 1, elapsed: duration });
                }
            }

            return result;
        }
    }
}
