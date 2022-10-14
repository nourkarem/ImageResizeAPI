import path from 'path';
import sharp from 'sharp';

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    const Inputpath = path.resolve(__dirname, './../../assets/full/');
    const OutputPath = path.resolve(__dirname, './../../assets/thumb/');

    await sharp(Inputpath + '/' + filename + '.jpg')
      .resize({
        width:width,
        height:height,
      })
      .toFile(
        OutputPath + '/' + filename + `_resizedImage-${width}_${height}.jpg`
      );
  } catch (error) {
    throw new Error('Input file is not exist');
  }
};

export default resizeImage;
