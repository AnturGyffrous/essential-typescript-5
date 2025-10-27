export function time(config) {
    return function (method, ctx) {
        const methodName = config?.label ?? String(ctx.name);
        return function (...args) {
            const start = performance.now();
            if (config?.time) {
                console.log(`${methodName} started`);
            }
            let result;
            if (config?.replacement) {
                result = config.replacement.call(this, ...args);
            }
            else {
                result = method.call(this, ...args);
            }
            if (config?.time) {
                const duration = (performance.now() - start).toFixed(2);
                console.log(`${methodName} ended ${duration} ms`);
            }
            return result;
        };
    };
}
