import express from 'express';
import routes from './routers/api/index';
const app = express();
const port = 3003;
app.use('/api/image', routes);
app.listen(port, () => {
    console.log('done server connection')
})
export default app;
