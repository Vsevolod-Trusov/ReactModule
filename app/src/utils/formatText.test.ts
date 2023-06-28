import { sliceText } from '.';

const INPUT_TEXT = 'Hello world';
const SECOND_TEXT = 'Vsevolod';
const LENGTH = 5;

describe('set to test format text', () => {
  it('Expect sliced text with length 5', () => {
    const slicedText = sliceText(INPUT_TEXT, LENGTH);
    expect(slicedText.length).toEqual(LENGTH);
  });
});
