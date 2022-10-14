import express, { Application ,Request,Response} from 'express';
import cors from 'cors';
import routes from './routes/api';

const app :Application= express();
const port:number= 3000;

app.use(cors());
app.use('/api/images', routes);
app.get('/api', (req:Request, res:Response): void => {
  res.send('main route');
  res.status(200);
});

app.listen(port, ():void => {
  console.log(`app is running on port ${port}`);
});

export default app;
