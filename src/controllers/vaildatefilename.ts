import express from 'express';
import logger from './indexcontroller';
const validateFilename = async (req: express.Request) => {
  interface image {
    filename: string;
    width: number;
    height: number;
  }
  const userImage: image = {
    filename: String(req.query.filename),
    width: Number(req.query.width),
    height: Number(req.query.height)
  };
  const resultLogger = await logger(userImage);
  return resultLogger;
};
export default validateFilename;
