import tryUntilValid from '../../src/utils/tryUntilValid';

test('예외를 던지지 않을 때까지 행동을 반복한다', async () => {
  let state = false;

  function callback() {
    if (state === false) {
      state = true;
      throw new Error('[ERROR] state가 false입니다');
    }
  }

  await tryUntilValid(callback);
  expect(state).toBeTruthy();
});
