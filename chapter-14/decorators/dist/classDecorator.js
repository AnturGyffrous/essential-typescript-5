export function serialize(originalClass, ctx) {
    const className = String(ctx.name);
    return class extends originalClass {
        serialize() {
            console.log(`${className}: ${JSON.stringify(this)}`);
        }
    };
}
