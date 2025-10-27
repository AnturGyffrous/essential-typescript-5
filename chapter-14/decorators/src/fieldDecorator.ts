export function double(notused: any, ctx: ClassFieldDecoratorContext) {
    return function (initialValue) {
        return initialValue * 2;
    }
}
