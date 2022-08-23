/* eslint-disable @typescript-eslint/ban-types */
import express from 'express'
import path from 'path';
import sharp from 'sharp';
const logger = async (req: express.Request, res: express.Response, next: Function): Promise<void> => {
    try {
        const { filename, width, height } = req.query;
        if (filename) {
            const widthImage = await sharp(path.join(__dirname, `../thumbs/23.jpg`)).metadata()
            if (width == widthImage.width && height == widthImage.height) {
                const url = filename;
                const fileimage = path.join(__dirname, `../thumbs/23.jpg`);
                await sharp(path.join(__dirname, `../../../images/${url}.jpg`))
                    .resize({ width: Number(width), height: Number(height) })
                    .toFile(fileimage)

                res.cookie("image", filename)
                next()
            }
        } else {
            next()
        }
    } catch (error) {
        res.json({ message: error })
    }
}
export default logger