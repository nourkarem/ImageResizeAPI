import express, { Application ,Request,Response} from 'express';
import resizeImage from '../../utilities/resize';
import fileExist from '../../utilities/fileExist';
import path from 'path';

const routes = express.Router();

routes.get('/', async (req:Request, res:Response) :Promise<void> => {
  const filename: string = req.query.filename as string;
  const width: number = req.query.width as unknown as number;
  const height: number = req.query.height as unknown as number;
  var val:number=0;

  if(filename  ==undefined  || width ==undefined || height==undefined)
  {   res.send('Missing filename, height or width')
//throw new Error('Missing filename, height or width')
}
 else{// check inputfile exist or not
  const Inbool: boolean = await fileExist(
    path.resolve(
      __dirname +
        '../../../../assets/full/' +
        filename +
        `.jpg`
    )
  );
 if (Inbool ==false)
 {
    res.send('Invalid input for filename')
    val=1;
    // throw new Error('Invalid input for filename')
   
 }
  
    
   else  if( !Number(width)|| width<= 0 ||height<= 0||!Number(height))
  {  
  //console.log(width)
  //console.log(height)
    res.send('Invalid input for height or width')
    //throw new Error('Invalid input for height or width')
    val=1;
  }
else
{
  const bool: boolean = await fileExist(
    path.resolve(
      __dirname +
        '../../../../assets/thumb/' +
        filename +
        `_resizedImage-${width}_${height}.jpg`
    )
  );

  if (bool === false) {
    await resizeImage(filename, width, height);
  }

  const outfile: string = path.resolve(
    __dirname +
      '../../../../assets/thumb/' +
      filename +
      `_resizedImage-${width}_${height}.jpg`
  );

  res.status(200).sendFile(outfile);
}
}
}
);

export default routes;
