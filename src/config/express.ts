import express from 'express';
import cors from 'cors';
import rootRoute from '@routes/index';
import errorHandler from './expressError';
import expressNotFound from './expressNotFound';
import expressLogger from './expressLogger';
const createServer = () => {
  const app = express();//instancia de express
  app.use(express.urlencoded({ extended: true }));// devolver los datos de manera extendida
  app.use(expressLogger);//Es para que muestre los errores o informacion en la terminal
  app.use(cors());// Poder ejecutar un dominio que no es propio de uno
  app.use(express.json());// leer un objeto js para leerlo en el request
  app.disable('x-powered-by');//Se utiliza para ocultar informacion por defecto que aparece
  app.use('/', rootRoute);//es la ruta que se utiliza en el index
  app.use(expressNotFound);// Se utiliza al usar una ruta no registrada
  app.use(errorHandler);// Se utiliza al econtrar un error de sintaxis o una excepcion no manejada
  return app;
};

export { createServer };

// expressjs.com