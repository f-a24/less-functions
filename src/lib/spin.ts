import { rgb2hex, hex2rgb, rgb2hsl, hsl2rgb } from './convert';

export type SpinType = (c: string, a: number) => ReturnType<typeof rgb2hex>;
const spin: SpinType = (c, a) => {
  const hsl = rgb2hsl(hex2rgb(c));
  const hue = (hsl[0] + a) % 360;
  hsl[0] = hue < 0 ? 360 + hue : hue;
  return rgb2hex(hsl2rgb(hsl));
};

export default spin;
