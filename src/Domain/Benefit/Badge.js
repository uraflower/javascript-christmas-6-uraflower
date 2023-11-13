import BADGE_CONDITIONS from '../../constants/benefit/badgeConditions.js';

const Badge = {
  getBadge(amount) {
    const matchedCondition = BADGE_CONDITIONS.find(
      (currentCondition) => amount >= currentCondition.minAmountForBadge,
    );

    return matchedCondition ? matchedCondition.badge : null;
  },
};

Object.freeze(Badge);
export default Badge;
