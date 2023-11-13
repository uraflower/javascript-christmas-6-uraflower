import VisitDate from '../src/Domain/VisitDate';

describe('방문 날짜 테스트', () => {
  describe('예외 테스트', () => {
    describe('입력 받은 날짜가 유효하지 않은 날짜임을 알린다.', () => {
      test.each([
        [['']],
        [[' 1 ']],
        [['1.0', '5.0000000000000001']],
        [['1일', 'hi', '1+1']],
        [['-1', '0', '99']],
        [['0001']],
      ])('입력 값: %p', (inputs) => {
        const INVALID_DATE_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다.';

        inputs.forEach((input) => {
          expect(() => {
            new VisitDate(input);
          }).toThrow(INVALID_DATE_MESSAGE);
        });
      });
    });
  });
});
