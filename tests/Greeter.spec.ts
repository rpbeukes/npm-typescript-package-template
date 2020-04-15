import { Greeter } from '../src/index';

test('My Greeter', () => {
  expect(Greeter('Yo')).toBe('Hello Yo');
});
