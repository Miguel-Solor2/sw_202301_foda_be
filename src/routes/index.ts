import express from 'express';
const router  = express.Router();

import EmpresasRouter from './empresas/empresas';
import usuariosRouter from './usuarios/usuarios';
//REST API
//Internet -> HTTP -> REST API -> DB
// SOAP XML wsdl
//{} JSON
//[] JSON
//{ llave : valor}
// valor: texto, numerico, booleano, array[valores], objeto {llave:valor}

// REST stateless, resource unique representation
// CRUD Create, Read, Update, Delete
//      POST,   GET,  PUT,    DELETE

// http://localhost:3001
router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

// http://localhost:3001/version
router.get('/version', (_req, res)=>{
  const version: string = "1.0.0";
  const jsonResp = {"name":"FODA Be", "version": version};
  //string, number, boolean, types, interfaces, classes, enumerators
  res.json(jsonResp);
 })

 router.use('/empresas', EmpresasRouter);//en esta ruta se guarda todo lo de EmpresasRouter
 router.use('/usuarios', usuariosRouter);

export default router;
