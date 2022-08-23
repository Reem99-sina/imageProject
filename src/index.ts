import express from 'express'
import routes from './routers/api/index'
const app = express()
app.use("/api/image", routes)

app.listen(3000, (): void => {
    console.log("done server connection")
})
export default app