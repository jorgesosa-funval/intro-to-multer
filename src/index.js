import express from 'express';
import { HOST, PORT } from './config/ServerConfig.js';
import { router } from './routes/index.js'
const app = express();
app.use(express.json())
router(app)



app.listen(PORT, () => {
    console.log(`HOST: ${HOST}`);
})
