const express = require('express');
const jwt = require('jsonwebtoken');
const peticion = express.Router();

const ccn = require('../connection/connection');

const verifica = require('./verificaToken');

peticion.post('/datosUser', verifica, async (req, res) => {
    const numControl = req.body.numcontrol;
    console.log(numControl);
    const sql = 'select * from pdf where numControl = ?';
    try {
        const conexion = await ccn();
        const [registros] = await conexion.execute(sql, [numControl]);
        if (registros.length > 0) {
            let datos = JSON.stringify(registros[0]);
            let dato = JSON.parse(datos);
            let data = JSON.stringify(dato);
            console.log(dato);
            res.json({ data });
        } else {
            res.json({ Error: "no hay datos" })
        }
        await conexion.end();
    } catch (error) {
        res.json({ Error: "En base de datos" });
    }  
});

peticion.post('/NoPago', verifica, async (req, res) => {
    const { NoPago, numControl } = req.body;
    const conexion = await ccn();
    try {
        const noPago = await conexion.execute('SELECT codigoPago from solicitud where codigoPago like ? and numControl = ? and activo = 1', [NoPago, numControl]);
        if (rows.length > 0) {
            res.json({ valido: "Aceptado" });
        }
    } catch (error) {
        res.json({ Error: "Número Invalido" });
    } finally {
        conexion.end();
    }
});

peticion.post('/NoPagoDesactivo',verifica, async (req, res) => {
    const codpag = req.body;
    const conexion = await ccn();
    try {
        const NopagoDesc = await conexion.execute('UPDATE solicitud set activo = 0 where codigoPago = ?', [codpag.NoPago]);
        res.json({ msg: "ok" });
    } catch (error) {
        res.json({ Error: "Error" })
    } finally {
        conexion.end();
    }
});

peticion.post('/ObtenerDatosPago', async (req, res) => {
    const NoPago = req.body;
    const conexion = await ccn();
    try {
        const ObDatosPag = await conexion.execute('SELECT * from solicitud where codigoPago = ?', [NoPago.NoPago]);
        let datos = JSON.stringify(rows[0].emitio);
        let dato = JSON.parse(datos);
        let data = JSON.stringify(dato);

        let datoos = JSON.stringify(rows[0].fechaSolicitud);
        let datoo = JSON.parse(datoos);
        let dataa = JSON.stringify(datoo);
        res.json({ "nombre": dataa, "emitio": data });
    } catch (error) {
        res.json({ err: "err" });
    }finally    {
        conexion.end();
    }
});

peticion.post('/SubirRegistro',verifica, async (req, res) => {
    const { NoCtrl, emitio, fecha, CodPago } = req.body;
    const conexion = await ccn();
    try {
        const SubirRegistro = await ccn.query('INSERT INTO emitidas (NoCtrl,emitio,fecha,CodPago) VALUES (?,?,?,?)', [NoCtrl, emitio, fecha, CodPago]);
        res.json({ ok: "ok" })
    } catch (error) {
        res.json({ err: "err" })
    }finally{
        conexion.end();
    }
});

peticion.post('/verInfo', async (req, res) => {
    const { numeroCtrl } = req.body;
    const conexion = await ccn();
    try {
        const verInfo = await conexion.execute('SELECT * from alumno where numControl = ?', [numeroCtrl]);
        res.json({ ok: "ok", data: rows[0] });
    } catch (error) {
        res.json({ err: "err" });
    }finally{
        conexion.end();
    }
});

peticion.post('/getContra', verifica, async (req, res) => {
    const { numcontrol } = req.body;
    const conexion = await ccn();
    try {
        const contra = await conexion.execute('Select password from usuario where userName = ?', [numcontrol]);
        if (rows.length > 0) {
            let datos = JSON.stringify(rows[0].password);
            let dato = JSON.parse(datos);
            let contraseña = JSON.stringify(dato);
            res.json({ contra: contraseña });
        }
    } catch (error) {
        //no tiene otra sentencia aparte del res.json del if
    }finally{
        conexion.end();
    }
});

peticion.post('/modifyProfile',verifica, async (req, res) => {
    const { alumno, curp, numControl, especialidad, grado, grupo, correo, turno } = req.body;
    const conexion = await ccn();
    try {
        const ModProfile = await conexion.execute('UPDATE alumno set nombre = ?, especialidad = ?, CURP = ?, grado = ?, grupo = ?, correo = ?, turno = ? where numControl = ?', [alumno, especialidad, curp, grado, grupo, correo, turno, numControl]);
        res.json({ ok: "ok" });
    } catch (error) {
        // no tiene otra sentencia aparte del res.json
    }finally{
        conexion.end();
    }
});





module.exports = peticion;
