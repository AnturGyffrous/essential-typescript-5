export function log(accessor: any, ctx: ClassSetterDecoratorContext | ClassGetterDecoratorContext) {
    const name = String(ctx.name);

    return function (this: any, ...args: any[]) {
        if (ctx.kind === "getter") {
            const result = accessor.call(this, ...args);
            console.log(`${name} get returned ${result}`);
            return result;
        } else {
            console.log(`${name} set to ${args}`);
            return accessor.call(this, ...args);
        }
    }
}
