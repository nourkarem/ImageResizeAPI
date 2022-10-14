import resizeImage from '../utilities/resize';

describe('Tests for imageProcess function', () => {
  it('expects imageProcess("flower", 200, 200) to be resolved', async () => {
    await expectAsync(resizeImage('flower', 200, 200)).toBeResolved();
  });

  it('expects imageProcess("floer", 200, 200) to be rejected', async () => {
    await expectAsync(resizeImage('floer', 200, 200)).toBeRejectedWith(
      new Error('Input file is not exist')
    );
  });
});
