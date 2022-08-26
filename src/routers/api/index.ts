import express from 'express';
import path from 'path';
import { promises as fsPromises } from 'fs'
import validateFilename from '../../controllers/vaildatefilename';
const router = express.Router()


router.get("/", async function (req, res, next): Promise<void> {
      try  {const resultImage = await validateFilename(req, res, next);
        console.log(resultImage)
        if (resultImage?.error) {
                const resultimaag = await fsPromises.readFile(`${path.join(__dirname, `../../thumbs/23.jpg`)}`)
                res.end(resultimaag);
        } else {
                const resultimaag = await fsPromises.readFile(`${path.join(__dirname, `../../thumbs/23.jpg`)}`)
                res.end(resultimaag);
        }}catch(error){
res.json({error})
        }

})
export default router;