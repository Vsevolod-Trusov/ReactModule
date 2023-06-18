import { sliceText, stringIsEquals } from './formatText';

const INPUT_TEXT = 'Hello world';
const SECOND_TEXT = 'Vsevolod';
const LENGTH = 5;

describe('set to test format text', () => {
  it('Expect sliced text with length 5', () => {
    const slicedText = sliceText(INPUT_TEXT, LENGTH);
    expect(slicedText.length).toEqual(LENGTH);
  });

  it('Expect true from equal two strings', () => {
    const isEqual = stringIsEquals(INPUT_TEXT, INPUT_TEXT);
    expect(isEqual).toEqual(true);
  });

  it('Expect false from equal two strings', () => {
    const isEqual = stringIsEquals(INPUT_TEXT, SECOND_TEXT);
    expect(isEqual).toEqual(false);
  });
});
