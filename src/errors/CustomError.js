import COMMON from '../constants/common.js';
import ERROR from '../constants/message/error.js';

const { whitespace, linebreak } = COMMON;

class CustomError extends Error {
  constructor(message) {
    super(ERROR.prefix + whitespace + message + whitespace + ERROR.retry + linebreak);
  }
}

export default CustomError;
