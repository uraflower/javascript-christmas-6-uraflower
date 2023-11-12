import BADGE_CONDITIONS from '../../constants/badgeConditions.js';

const Badge = {
  getBadge(amount) {
    let matchedBadge = null;

    BADGE_CONDITIONS.forEach((currentCondition) => {
      if (amount >= currentCondition.minAmountForBadge) {
        const { badge } = currentCondition;
        matchedBadge = badge;
      }
    });

    return matchedBadge;
  },
};

Object.freeze(Badge);
export default Badge;
