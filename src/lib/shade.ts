import mix from './mix';

export type ShadeType = (c: string, a: number) => ReturnType<typeof mix>;
const shade: ShadeType = (c, a) => mix('#000000', c, a);

export default shade;
