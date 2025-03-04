import { bgRgb,bold } from 'ansis';

export const ERROR_PREFIX = bgRgb(255, 0, 75).bold.rgb(0, 0, 0)(' Error ');
export const WARNING_PREFIX = bgRgb(242, 196, 44).bold.rgb(0, 0, 0)(' WARNING ');
export const SUCCESS_PREFIX = bgRgb(44, 242, 85).bold.rgb(0, 0, 0)(' SUCCESS ');
export const INFO_PREFIX = bgRgb(44,85,242).bold.rgb(0, 0, 0)(' INFO ');
export const TEZX = bold.rgb(44, 242, 85)(' tezx ');