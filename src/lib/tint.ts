import mix from './mix';

export type TintType = (c: string, a: number) => ReturnType<typeof mix>;
const tint: TintType = (c, a) => mix('#ffffff', c, a);

export default tint;
