import luma from './luma';

export type ContrastType = (
  hex: string,
  d?: string,
  l?: string,
  t?: number
) => string;

const contrast: ContrastType = (
  hex: string,
  d = '#000000',
  l = '#ffffff',
  t = 0.43
) => {
  let dark = d;
  let light = l;

  if (luma(dark) > luma(light)) {
    light = d;
    dark = l;
  }
  if (luma(hex) < t) return light;
  return dark;
};

export default contrast;
