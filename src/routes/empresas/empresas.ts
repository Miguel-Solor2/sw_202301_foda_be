import express from 'express'; //importar instancia de express para dar acceso a las clases de express
const router = express.Router(); //metodo de instancia de router para registrar todos los end points

import {Empresas } from '@libs/Empresas/Empresas';

const empresasModel = new Empresas();
empresasModel.add({
    codigo: '',
    nombre: 'Mi Empresa',
    status: 'Activo'
});
//Registrar los end points en router
//funcion flat arrow
// http://localhost:3001/empresas
router.get('/', (_req, res)=>{
    const jsonUrls = {
      "getAll": {"method":"get", "url": "empresas/all"},
      "getById": {"method":"get", "url": "empresas/byid/:id"},  
      "new": {"method":"post", "url": "empresas/new"}, 
      "update": {"method":"put", "url": "empresas/upd/:id"}, 
      "delete": {"method":"delete", "url": "empresas/del/:id"}, 
    };
    res.status(200).json(jsonUrls);
});//Donde se va a registrar el endpoint a la ruta ya existente

router.get('/all', (_req, res) =>{
    res.status(200).json(empresasModel.getAll());
   // res.status(200).json({'msg': 'Not Implemented yet'});
});
/**Ejemplo
  router.get('/', function(_req, res){
});
 */

//exportar objeto router para darle uso desde el index y se incorpore
export default router;