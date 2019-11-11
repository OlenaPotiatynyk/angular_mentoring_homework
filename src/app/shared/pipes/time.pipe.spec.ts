import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  const pipe = new TimePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "127" to "2 h 7 min"', () => {
    expect(pipe.transform(127)).toBe('2 h 7 min');
  });

  it('transforms "40" to "40 min"', () => {
    expect(pipe.transform(40)).toBe('40 min');
  });
});
