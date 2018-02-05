'use strict';

const ASCENDING_NUMBERS = '0123456789';

const reverse = value => value.split('').reverse().join('');

module.exports = input => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  if (ASCENDING_NUMBERS.includes(input) || reverse(ASCENDING_NUMBERS).includes(input)) {
    return false;
  }
  if (new RegExp(`(.)\\1{${input.length - 1}}`).test(input)) {
    return false;
  }

  return true;
};
