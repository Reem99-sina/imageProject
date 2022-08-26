/* eslint-disable no-fallthrough */
/* eslint-disable no-sparse-arrays */
import express from 'express';

import path from 'path';
import { promises as fsPromises } from 'fs';
import validateFilename from '../../controllers/vaildatefilename';
const router = express.Router();

router.get('/', async function(req, res): Promise<void> {
  try {
    const resultImage = await validateFilename(req);
    if (resultImage) {
      const resultimaag = await fsPromises.readFile(
        `${path.join(__dirname, `../../thumbs/23.jpg`)}`
      );
      res.end(resultimaag);
    }
  } catch (error) {
    res.json({ error });
  }
});
export default router;
