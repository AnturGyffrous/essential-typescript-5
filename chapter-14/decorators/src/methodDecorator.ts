type Config = {
    label?: string,
    time?: boolean,
    replacement?: Function
}

export function time(config?: Config) {
    return function <This, Args extends any[], Result extends string | number>(
        method: (This, Args) => Result,
        ctx: ClassMethodDecoratorContext<This, (This, Args) => Result>) {

        const methodName = config?.label ?? String(ctx.name);

        return function (this: This, ...args: Args) {
            const start = performance.now();
            if (config?.time) {
                console.log(`${methodName} started`);
            }
            let result;
            if (config?.replacement) {
                result = config.replacement.call(this, ...args);
            } else {
                result = method.call(this, ...args);
            }
            if (config?.time) {
                const duration = (performance.now() - start).toFixed(2);
                console.log(`${methodName} ended ${duration} ms`);

            } return result;
        }
    }
}
