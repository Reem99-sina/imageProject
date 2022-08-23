import express from 'express';
import path from 'path';
import logger from '../../utilites/logger'
import { promises as fsPromises } from 'fs'
const router = express.Router()

router.get("/", logger, async function (req, res): Promise<void> {
        const resultimaag = await fsPromises.readFile(`${path.join(__dirname, `../../thumbs/23.jpg`)}`)
        res.end(resultimaag)
})
export default router;