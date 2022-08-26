/* eslint-disable no-sparse-arrays */

import path from 'path';
import sharp from 'sharp';
interface image {
  filename: string;
  width: number;
  height: number;
}

const logger = async (resultImage: image) => {
  try {
    if (resultImage.filename) {
      const widthImage = await sharp(
        path.join(__dirname, `../thumbs/23.jpg`)
      ).metadata();
      if (
        resultImage.width == widthImage.width &&
        resultImage.height == widthImage.height
      ) {
        return { error: 'width not change and height' };
      } else {
        const url = resultImage.filename;
        const fileimage = path.join(__dirname, `../thumbs/23.jpg`);
        await sharp(path.join(__dirname, `../../../images/${url}.jpg`))
          .resize({
            width: Number(resultImage.width),
            height: Number(resultImage.height)
          })
          .toFile(fileimage);
        return { message: 'done file imgage resize' };
      }
    } else {
      return { error: 'no filname add' };
    }
  } catch (error) {
    return { error };
  }
};

export default logger;
