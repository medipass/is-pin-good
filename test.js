import test from 'ava';
import isPinGood from '.';

test('it throws an Error if the input is not a string', t => {
  const error = t.throws(() => isPinGood(1234), Error);
  t.is(error.message, 'Expected a string, got number');
});

test('it throws an Error if the input is not given', t => {
  const error = t.throws(() => isPinGood(), Error);
  t.is(error.message, 'Expected a string, got undefined');
});

test('it should return false if the pin is simple (repeat numbers)', t => {
  t.is(isPinGood('5555'), false);
  t.is(isPinGood('6666666'), false);
});

test('it should return false if the pin is simple (ascending numbers)', t => {
  t.is(isPinGood('3456'), false);
  t.is(isPinGood('123456'), false);
});

test('it should return false if the pin is simple (descending numbers)', t => {
  t.is(isPinGood('4321'), false);
  t.is(isPinGood('98765'), false);
});

test('it should return true if the pin is complex', t => {
  t.is(isPinGood('6126'), true);
  t.is(isPinGood('6126123'), true);
});
