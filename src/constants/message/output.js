import BENEFIT from '../benefit.js';

const OUTPUT = Object.freeze({
  guide: Object.freeze({
    greeting:
      '<인사말>\n안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n2023년 12월 한 달 동안 우테코 식당에서 10,000원 이상 주문하시는\n모든 고객님들께 푸짐한 혜택을 드리는 이벤트를 진행하고 있습니다.\n더불어 이번 이벤트에서 특정 금액 이상 혜택을 받으신 고객님들께는\n2024년 1월 예정된 새해 이벤트에서 또 다른 혜택을 제공해드릴 예정입니다.\n자세한 이벤트 내용은 <docs/EVENT.md>에서 확인하실 수 있습니다.\n우테코 식당에서 즐거운 추억을 쌓으실 수 있도록 항상 최선을 다하겠습니다.\n감사합니다.\n',
  }),
  title: Object.freeze({
    orderedMenu: '\n<주문 메뉴>',
    totalAmountOfOrder: '\n<할인 전 총주문 금액>',
    giftMenu: '\n<증정 메뉴>',
    benefitDetails: '\n<혜택 내역>',
    totalAmountOfBenefit: '\n<총혜택 금액>',
    totalAmountToPay: '\n<할인 후 예상 결제 금액>',
    badge: '\n<12월 이벤트 배지>',
  }),
  content: Object.freeze({
    benefit: Object.freeze({
      [BENEFIT.christmas]: '크리스마스 디데이 할인:',
      [BENEFIT.weekday]: '평일 할인:',
      [BENEFIT.weekend]: '주말 할인:',
      [BENEFIT.special]: '특별 할인:',
      [BENEFIT.gift]: '증정 이벤트:',
    }),
    none: '없음',
  }),
});

export default OUTPUT;
