const express = require('express');
const router = express.Router();

const control = require('../controlador/controller')

//Rutas para empleados
router.get('/clientes', control.list);
router.post('/add', control.save);
router.post('/delete', control.delete);
router.post('/update', control.update);
router.get('/lineas',control.listb);
router.post('/add2', control.saveb);
router.post('/delete2', control.deleteb);
router.post('/update2', control.updateb);
router.get('/creditos', control.listc);
router.post('/add3', control.savec);
router.post('/delete3', control.deletec);
router.post('/update3', control.updatec);
router.get('/cuentas', control.listd);
router.post('/add4', control.saved);
router.post('/delete4', control.deleted);
router.post('/update4', control.updated);
router.get('/operacionesemp', control.listop);

//Rutas generales (login, auth, info)
router.get('/login', control.login);
router.post('/auth', control.ingreso);
router.get('/logout', control.logout);
router.get('/personal', control.personal);
router.post('/uppersonal', control.updatepersonal);

//Rutas para clientes
router.get('/lineascli', control.listcliente);
router.get('/creditoscli', control.listcred);
router.get('/operaciones', control.listopcli);
router.get('/cuentascli', control.listcnt);
router.post('/add5', control.operacional);

//Rutas para Admin
router.get('/usuarios', control.listusu);
router.post('/add6', control.saveusu);
router.post('/delete6', control.deleteusu);
router.post('/update6', control.updateusu);

module.exports = router;