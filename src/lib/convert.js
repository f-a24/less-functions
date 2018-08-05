/* RGB => HEX */
export const rgb2hex = rgb => `#${rgb.map(v => `0${Math.floor(v).toString(16)}`.slice(-2)).join('')}`;

/* HEX => RGB */
export const hex2rgb = hex => {
  let tmpHex = hex;
  if (hex.slice(0, 1) === '#') tmpHex = hex.slice(1);
  if (hex.length === 3) {
    tmpHex = hex.slice(0, 1)
      + hex.slice(0, 1)
      + hex.slice(1, 2)
      + hex.slice(1, 2)
      + hex.slice(2, 3)
      + hex.slice(2, 3);
  }

  return [tmpHex.slice(0, 2), tmpHex.slice(2, 4), tmpHex.slice(4, 6)].map(str => parseInt(str, 16));
};

/* RGB => HSL */
export const rgb2hsl = rgb => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0;
  } else {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      case b:
        h = (r - g) / diff + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
};

const hue = (h, m1, m2) => {
  let tmpH;
  if (h < 0) {
    tmpH = h + 1;
  } else if (h > 1) {
    tmpH = h - 1;
  } else {
    tmpH = h;
  }
  if (tmpH * 6 < 1) {
    return m1 + (m2 - m1) * tmpH * 6;
  }
  if (tmpH * 2 < 1) {
    return m2;
  }
  if (tmpH * 3 < 2) {
    return m1 + (m2 - m1) * (2 / 3 - tmpH) * 6;
  }
  return m1;
};

/* HSL => RGB */
export const hsl2rgb = hsl => {
  const h = (hsl[0] % 360) / 360;
  const s = Math.min(1, Math.max(0, hsl[1]));
  const l = Math.min(1, Math.max(0, hsl[2]));
  const m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  const m1 = l * 2 - m2;

  return [hue(h + 1 / 3, m1, m2) * 255, hue(h, m1, m2) * 255, hue(h - 1 / 3, m1, m2) * 255];
};
