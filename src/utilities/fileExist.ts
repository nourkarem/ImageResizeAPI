// Import the filesystem module
import * as fs from 'fs';

const fileExist = async (filepath: string): Promise<boolean> => {
  try {
    const file = fs.openSync(filepath, 'r');
  //  console.log('File already exist');
    fs.close(file);
    return true;
  } catch (err) {
   // console.log('file will be resized by Sharp');

    return false;
  }
};

export default fileExist;
