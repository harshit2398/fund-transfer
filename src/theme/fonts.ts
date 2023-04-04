import metrics from './metrics';

export const size: any = {
  font6: metrics.screenWidth * (6 / 365),
  font8: metrics.screenWidth * (8 / 365),
  font10: metrics.screenWidth * (10 / 365),
  font12: metrics.screenWidth * (12 / 365),
  font14: metrics.screenWidth * (14 / 365),
  font16: metrics.screenWidth * (16 / 365),
  font20: metrics.screenWidth * (20 / 365),
  font24: metrics.screenWidth * (24 / 365),
  font28: metrics.screenWidth * (28 / 365),
  font32: metrics.screenWidth * (32 / 365),
};

export const weight: any = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

const type = {};

// export default {size, weight, type};
