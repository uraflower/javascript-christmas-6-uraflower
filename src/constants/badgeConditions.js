const BADGE = Object.freeze({
  santa: '산타',
  tree: '트리',
  star: '별',
});

const BADGE_CONDITIONS = Object.freeze([
  Object.freeze({
    minAmountForBadge: 20000,
    badge: BADGE.santa,
  }),
  Object.freeze({
    minAmountForBadge: 10000,
    badge: BADGE.tree,
  }),
  Object.freeze({
    minAmountForBadge: 5000,
    badge: BADGE.star,
  }),
]);

export default BADGE_CONDITIONS;
