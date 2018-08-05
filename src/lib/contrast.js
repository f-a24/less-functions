import luma from './luma';

export default (c, d = '#000000', l = '#ffffff', t = 0.43) => {
  let dark = d;
  let light = l;

  if (luma(dark) > luma(light)) {
    light = d;
    dark = l;
  }
  if (luma(c) < t) {
    return light;
  }
  return dark;
};
