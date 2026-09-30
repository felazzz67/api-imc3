import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/imc', (req: Request, res: Response) => {
  //res.send('Vamos calcular seu IMC');
  const {name,age,weight,height} = req.body;
  const imc = weight/(height*height)
  //Casting
  const imcAccurency = parseFloat (imc.toFixed(2));
  let status = "";
  if( imcAccurency < 18.5){
    status = "Abaixo do peso normal"
  }
  else if(imcAccurency < 25){
    status = "peso normal"
  }
  else if(imcAccurency < 30){
    status = "Excesso de peso"
  }
  else{
    status = "OBESO NIVEL THAIS CARLA"
  }

  res.json({
    name,
    age,
    weight,
    height,
    imc:imcAccurency,
    status
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});