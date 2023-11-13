import VisitDate from '../src/Domain/VisitDate';

describe('방문 날짜 테스트', () => {
  describe('기능 테스트', () => {
    test('유효한 날짜를 입력하면 방문 날짜를 생성한다', () => {
      const date = '1';

      expect(() => {
        new VisitDate(date);
      }).not.toThrow();
    });

    test('입력 값이 3이면 방문 날짜의 날은 3일이다', () => {
      const date = '3';
      const expectedDate = 3;

      const visitDate = new VisitDate(date);

      expect(visitDate.date).toBe(expectedDate);
    });

    describe('이벤트 달력에 표시된 별 날짜 테스트', () => {
      describe('방문 날짜가', () => {
        test.each(['3', '10', '17', '24', '25', '31'])(
          '%s이면 별 날짜이다',
          (date) => {
            const visitDate = new VisitDate(date);

            const result = visitDate.isStarredDate();

            expect(result).toBeTruthy();
          },
        );

        test.each(['1', '13', '20', '30'])(
          '%s이면 별 날짜가 아니다',
          (date) => {
            const visitDate = new VisitDate(date);

            const result = visitDate.isStarredDate();

            expect(result).toBeFalsy();
          },
        );
      });
    });
  });

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
