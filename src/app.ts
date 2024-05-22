import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/product.route';
import router from './routes';
const app = express();

// parsers
app.use(express.json());

// application routes
app.use('/api', router);
// app.use('/api/v1', router);
// app.use('/api/products',ProductRoutes);

app.get('/', (req:Request, res:Response) => {
  res.send('Maassalam!!!')
})

export default app;