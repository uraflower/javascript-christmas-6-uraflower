import BADGE from './badge.js';

const BADGE_CONDITIONS = Object.freeze([
  Object.freeze({
    minAmountOfBenefit: 20000,
    badge: BADGE.santa,
  }),
  Object.freeze({
    minAmountOfBenefit: 10000,
    badge: BADGE.tree,
  }),
  Object.freeze({
    minAmountOfBenefit: 5000,
    badge: BADGE.star,
  }),
]);

export default BADGE_CONDITIONS;
