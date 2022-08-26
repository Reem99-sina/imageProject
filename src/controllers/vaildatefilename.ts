import express from 'express'
import path from 'path';
import sharp from 'sharp';
import logger from './indexcontroller';
const validateFilename =async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    interface image { filename: string, width: number, height: number }
    const userImage: image = { filename: String(req.query.filename), width: Number(req.query.width), height: Number(req.query.height) };
   const resultLogger= await logger(userImage);
   return resultLogger;
}
export default validateFilename