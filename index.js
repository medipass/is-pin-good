'use strict';

const ASCENDING_NUMBERS = '0123456789';

const reverse = value => value.split('').reverse().join('');
const isRepeat = value => new RegExp(`(.)\\1{${value.length - 1}}`).test(value);

module.exports = input => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  if (ASCENDING_NUMBERS.includes(input) || reverse(ASCENDING_NUMBERS).includes(input)) {
    return false;
  }
  if (isRepeat(input)) {
    return false;
  }

  return true;
};
