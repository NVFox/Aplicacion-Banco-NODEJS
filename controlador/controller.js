const controller = {};
const bcryptjs = require('bcryptjs');

controller.login = (req, res) => {
    res.render('login')
};

//Métodos de clientes

controller.list = (req, res) => {
    if(req.session.loggedin){
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM clientes', (err, clientes) => {
                if (err) {
                    next(err);
                }
                else{
                    if(req.session.loggedin2){
                        res.render('clientes', {
                            data: clientes,
                            login: true,
                            loginad: true,
                            name: req.session.name
                        });
                    }
                    else{
                        res.render('clientes', {
                            data: clientes,
                            login: true,
                            loginad: false,
                            name: req.session.name
                        });
                    }
                }
            });
        });
    }
    else{
        res.render('clientes', {
            login: false,
            name: 'Debe iniciar sesión como EMPLEADO'
        });
    }
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO clientes set ?', [data], (err, cliente) => {
            res.redirect('/clientes');
        })
    })
};

controller.delete = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM clientes WHERE DocCli = ?', [data.DocCli], (err, result) => {
            res.redirect('/clientes');
        })
    })
}

controller.update = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE clientes SET ? WHERE DocCli = ?', [data, data.DocCli], (err, results) => {
            if (err) {
                res.json(err);
            } else {
                res.redirect('/clientes')
            }
        })
    })
}

//Métodos de lineas

controller.listb = (req, res) => {
    if(req.session.loggedin){
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM lineas', (err, lineas) => {
                if (err) {
                    next(err);
                }
                else{
                    if(req.session.loggedin2){
                        res.render('lineascred', {
                            data: lineas,
                            login: true,
                            loginad: true,
                            name: req.session.name
                        });
                    }
                    else{
                        res.render('lineascred', {
                            data: lineas,
                            login: true,
                            loginad: false,
                            name: req.session.name
                        });
                    }
                }
                
            });
        });
    }
    else{
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM lineas', (err, lineas) => {
                if (err) {
                    next(err);
                }
                res.render('lineascred', {
                    login: false,
                    name: 'Debe iniciar sesión como EMPLEADO'
                });
            });
        });
    }
};

controller.saveb = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO lineas set ?', [data], (err, lineas) => {
            res.redirect('/lineas');
        })
    })
};

controller.updateb = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE lineas SET ? WHERE CodLinea = ?', [data, data.CodLinea], (err, results) => {
            res.redirect('/lineas');
        })
    })
};

controller.deleteb = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM lineas WHERE CodLinea = ?', [data.CodLinea], (err, results) => {
            if(err){
                res.json(err);
            } else {
                res.redirect('/lineas');
            }
        })
    })
}

//Métodos de créditos

controller.listc = (req, res) => {
    if(req.session.loggedin){
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM creditos', (err, creditos) => {
                if (err) {
                    next(err);
                }
                else{
                    if(req.session.loggedin2){
                        res.render('creditos', {
                            data: creditos,
                            login: true,
                            loginad: true,
                            name: req.session.name
                        });
                    }
                    else{
                        res.render('creditos', {
                            data: creditos,
                            login: true,
                            loginad: false,
                            name: req.session.name
                        });
                    }
                }
                
            });
        });
    }
    else{
        res.render('creditos', {
            login: false,
            name: 'Debe iniciar sesión como EMPLEADO'
        });
    }
};

controller.savec = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO creditos set ?', [data], (err, creditos) => {
            if(err){
                res.json(err);
            } else {
                res.redirect('/creditos');
            }
        })
    })
};

controller.updatec = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE creditos SET ? WHERE CodigoCredito = ?', [data, data.CodigoCredito], (err, results) => {
            res.redirect('/creditos');
        })
    })
};

controller.deletec = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM creditos WHERE CodigoCredito = ?', [data.CodigoCredito], (err, results) => {
            res.redirect('/creditos');
        })
    })
}

//Métodos de cuentas

controller.listd = (req, res) => {
    if(req.session.loggedin){
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM cuentas', (err, cuentas) => {
                if (err) {
                    next(err);
                }
                else{
                    if(req.session.loggedin2){
                        res.render('cuentas', {
                            data: cuentas,
                            login: true,
                            loginad: true,
                            name: req.session.name
                        });
                    }
                    else{
                        res.render('cuentas', {
                            data: cuentas,
                            login: true,
                            loginad: false,
                            name: req.session.name
                        });
                    }
                }
                
            });
        });
    }
    else{
        res.render('cuentas', {
            login: false,
            name: 'Debe iniciar sesión como EMPLEADO'
        });
    }
}

controller.saved = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cuentas set ?', [data], (err, cuentas) => {
            res.redirect('/cuentas');
        })
    })
}

controller.updated = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE cuentas SET ? WHERE CodCuenta = ?', [data, data.CodCuenta], (err, results) => {
            if(err){
                res.json(err);
            } else {
                res.redirect('/cuentas');
            }
        })
    })
}

controller.deleted = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cuentas WHERE CodCuenta = ?', [data.CodCuenta], (err, results) => {
            res.redirect('/cuentas');
        })
    })
}

//Métodos de operaciones

controller.listop = (req, res) => {
    if(req.session.loggedin){
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM operaciones', (err, cuentas) => {
                if (err) {
                    next(err);
                }
                else{
                    if(req.session.loggedin2){
                        res.render('cstoperaciones', {
                            data: cuentas,
                            login: true,
                            loginad: true,
                            name: req.session.name
                        });
                    }
                    else{
                        res.render('cstoperaciones', {
                            data: cuentas,
                            login: true,
                            loginad: false,
                            name: req.session.name
                        });
                    }
                }
                
            });
        });
    }
    else{
        res.render('cstoperaciones', {
            login: false,
            name: 'Debe iniciar sesión como EMPLEADO'
        });
    }
}

//Métodos auth y login

controller.ingreso = async (req, res) => {
    const user = req.body.NomUsu;
    const pass = req.body.Clave;
    let passHash = await bcryptjs.hash(pass, 8);
    const estado = ['Activo', 'Inactivo']
    const rol = ['Cliente', 'Empleado', 'Administrador']

    req.getConnection((err, conn) => {
        
        if(user && pass){
            conn.query('SELECT * FROM usuarios WHERE NomUsu = ?', [user], async (err, results) => {
                if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].Clave))){
                    res.render('login',{
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Datos incorrectos",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    });
                }
                else{
                    if(results[0].Estado == estado[1]){
                        res.render('login',{
                            alert: true,
                            alertTitle: "Advertencia",
                            alertMessage: "Su usuario está inactivo. Si desea reactivarlo, comuniquese con el administrador",
                            alertIcon: "warning",
                            showConfirmButton: true,
                            timer: false,
                            ruta: 'login'
                        });
                    }
                    else{
                        if(results[0].Rol == rol[0]){
                            req.session.loggedin1 = true;
                            req.session.name = results[0].NomUsu
                            req.session.pass = results[0].Clave
                            res.render('login',{
                                alert: true,
                                alertTitle: "¡Conexión exitosa!",
                                alertMessage: "Bienvenido/a",
                                alertIcon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: 'lineascli'
                            });
                        }
                        else if(results[0].Rol == rol[1]){
                            req.session.loggedin = true;
                            req.session.name = results[0].NomUsu
                            res.render('login',{
                                alert: true,
                                alertTitle: "¡Conexión exitosa!",
                                alertMessage: "Bienvenido/a",
                                alertIcon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: 'clientes'
                            });
                        }
                        else{
                            req.session.loggedin = true;
                            req.session.loggedin2 = true;
                            req.session.name = results[0].NomUsu
                            req.session.pass = results[0].Clave
                            res.render('login',{
                                alert: true,
                                alertTitle: "¡Conexión exitosa!",
                                alertMessage: "Bienvenido/a",
                                alertIcon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: 'usuarios'
                            });
                        }
                    }
                }
            })
        }
        else{
            res.render('login',{
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese o vuelva a ingresar sus datos",
                alertIcon: "warning",
                showConfirmButton: true,
                timer: 1500,
                ruta: 'login'
            });
        }
    })
}

controller.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}

//Métodos cliente (lineas, créditos, operaciones, cuentas)

controller.listcliente = (req, res) => {
    const user = req.session.name
    const pass = req.session.pass

    if (req.session.loggedin1) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM lineas INNER JOIN creditos on (creditos.CodLinea = lineas.CodLinea) INNER JOIN clientes on (clientes.DocCli = creditos.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ? AND Clave = ?', [user, pass], (err, espcli) => {
                if (err){
                    next(err);
                }
                res.render('lineascli',{
                    data: espcli,
                    logincli: true,
                    name: req.session.name
                });
            });
        });
    }
    else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM lineas INNER JOIN creditos on (creditos.CodLinea = lineas.CodLinea) INNER JOIN clientes on (clientes.DocCli = creditos.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ? AND Clave = ?', [user, pass], (err, espcli) => {
                if (err){
                    next(err);
                }
                res.render('lineascli',{
                    data: espcli,
                    logincli: false,
                    name: 'Debe iniciar sesión como CLIENTE' 
                });
            });
        });
    }
}

controller.listcred = (req, res) => {
    const user = req.session.name
    const pass = req.session.pass

    if (req.session.loggedin1) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM creditos INNER JOIN clientes on (clientes.DocCli = creditos.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ? AND Clave = ?', [user, pass], (err, crecli) => {
                if (err){
                    next(err);
                }
                res.render('creditoscli',{
                    data: crecli,
                    logincli: true,
                    name: req.session.name
                });
            });
        });
    }
    else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM creditos INNER JOIN clientes on (clientes.DocCli = creditos.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ? AND Clave = ?', [user, pass], (err, crecli) => {
                if (err){
                    next(err);
                }
                res.render('creditoscli',{
                    data: crecli,
                    logincli: false,
                    name: 'Debe iniciar sesión como CLIENTE'
                });
            });
        });
    }
}

controller.listcnt = (req, res) => {
    const user = req.session.name

    if (req.session.loggedin1) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM cuentas INNER JOIN clientes on (cuentas.DocCli = clientes.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ?', [user], (err, cntli) => {
                if (err){
                    res.json(err);
                }
                res.render('cuentascli',{
                    data: cntli,
                    logincli: true,
                    name: user
                });
            });
        });
    }
    else {
        res.render('cuentascli',{
            logincli: false,
            name: 'Debe iniciar sesión como CLIENTE'
        });
    }
}

controller.listopcli = (req, res) => {
    const user = req.session.name

    if (req.session.loggedin1) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM operaciones INNER JOIN cuentas on (operaciones.CodCuenta = cuentas.CodCuenta) INNER JOIN clientes on (cuentas.DocCli = clientes.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ?', [user], (err, opcli) => {
                if (err){
                    res.json(err);
                } else {
                    res.render('operaciones',{
                        data: opcli,
                        logincli: true,
                        name: user
                    });
                }
            });
        });
    }
    else {
        res.render('operaciones',{
            logincli: false,
            name: 'Debe iniciar sesión como CLIENTE'
        });
    }
}

controller.operacional = (req, res) => {
    const data = req.body;
    const user = req.session.name
    let hoy = new Date();
    let dd = String(hoy.getDate()).padStart(2, '0');
    let mm = String(hoy.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = hoy.getFullYear();
    
    hoy = yyyy + '/' + mm + '/' + dd;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cuentas INNER JOIN clientes on (cuentas.DocCli = clientes.DocCli) INNER JOIN usuarios on (clientes.DocCli = usuarios.DocCli) WHERE NomUsu = ? AND TipoCuenta = ?', [user, data.TipoCuenta], (err, results) => {
            if(err){
                res.json(err);
            } else {
                data.CodCuenta = results[0].CodCuenta;
                data.SalAnterior = Number.parseInt(results[0].Saldo);
                data.Fecha = hoy;

                if (data.Operacion == "Retiro"){
                    data.SalActual = (data.SalAnterior - (Number.parseInt(data.OpDinero)));
                } else {
                    data.SalActual = (data.SalAnterior + (Number.parseInt(data.OpDinero)));
                }

                conn.query('INSERT INTO operaciones SET ?', [data], (err, ops) => {
                    if(err){
                        res.json(err);
                    } else {
                        conn.query('UPDATE cuentas SET ? WHERE CodCuenta = ?', [{"Saldo": data.SalActual}, data.CodCuenta], (err, reup) => {
                            if(err){
                                res.json(err);
                            } else {
                                res.redirect('/operaciones');
                            }
                        })
                    }
                })
            }
        })
    })
}

//Métodos admin (usuarios)

controller.listusu = (req, res) => {
    if (req.session.loggedin2) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM usuarios', (err, usuarios) => {
                if (err){
                    next(err);
                }
                res.render('usuarios',{
                    data: usuarios,
                    login: true,
                    loginad: true,
                    name: req.session.name
                });
            });
        });
    }
    else {
        res.render('usuarios',{
            login: false,
            loginad: false,
            name: 'Debe iniciar sesión como ADMINISTRADOR'
        });
    }
}

controller.saveusu = async (req, res) => {
    const data = await req.body;
    data.Clave = await bcryptjs.hash(data.Clave, 8);

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios SET ?', [data], async (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.redirect('/usuarios');
            }
        })
    })
}

controller.updateusu = async (req, res) => {
    const data = await req.body;
    if ((data.Clave).length !== 60) {
        data.Clave = await bcryptjs.hash(data.Clave, 8);
    }

    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios SET ? WHERE DocCli = ?', [data, data.DocCli], (err, results) => {
            if (err) {
                res.json(err);
            } else {
                res.redirect('/usuarios');
            }
        })
    })
}

controller.deleteusu = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE DocCli = ?', [data.DocCli], (err, results) => {
            res.redirect('/usuarios');
        })
    })
}

//Métodos generales (info personal)

controller.personal = (req, res) => {
    const user = req.session.name;

    if (req.session.loggedin || req.session.loggedin1 || req.session.loggedin2) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM usuarios WHERE NomUsu = ?', [user], (err, personal) => {
                if (err){
                    next(err);
                } else {
                    if (req.session.loggedin2) {
                        res.render('personal', {
                            data: personal,
                            login: true,
                            loginad: true,
                            logincli: false,
                            name: user
                        })
                    } else if (req.session.loggedin) {
                        res.render('personal', {
                            data: personal,
                            login: true,
                            loginad: false,
                            logincli: false,
                            name: user
                        })
                    } else if (req.session.loggedin1) {
                        res.render('personal', {
                            data: personal,
                            login: false,
                            loginad: false,
                            logincli: true,
                            name: user
                        })
                    }
                }
            })
        })
    } else {
        res.render('personal', {
            login: false,
            loginad: false,
            logincli: false,
            name: 'Debe iniciar sesión'
        })
    }
}

controller.updatepersonal = async (req, res) => {
    const data = req.body;
    data.Clave = await bcryptjs.hash(data.Clave, 8);

    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios SET ? WHERE DocCli = ?', [data, data.DocCli], (err, result) => {
            res.redirect('/logout')
        })
    })
}

module.exports = controller;