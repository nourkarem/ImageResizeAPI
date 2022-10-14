import fileExist from '../utilities/fileExist';
import path from 'path';
describe('Tests for fileExist function', () => {
  it('expects fileExist(rightPath) to be true', async function () {
    const data = await fileExist(
      path.resolve(__dirname + '../../../assets/full/appleTree.jpg')
    );
    expect(data).toBeTrue();
  });

  it('expects fileExist(wrongPath) to be false', async function () {
    const data = await fileExist(
      path.resolve(__dirname + '../../../assets/full/apple.jpg')
    );
    expect(data).toBeFalse();
  });
});
