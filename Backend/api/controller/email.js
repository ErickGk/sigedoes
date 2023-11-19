const nodemailer = require("nodemailer");



function enviarCorreo(email, res) {


    // Configuración del correo
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "sigedoes@cbtis66.edu.mx",
            pass: "wwkajnuwaejakxvy",
        },
    });

    const mailOptions = new MailOptions(email.tipo, email);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("manejo de error: " + error);
            res.send("error");
        } else {
            console.log("Correo Enviado: " + info.response);
            res.send({ msg: "Correo enviado satisfactoriamente" });
        }
    });
    res.json("Correcto");
}

function MailOptions(tipo, email) {
     
    switch (tipo) {
        case "Constancia":
            const mailOptions = {
                from: `"Control escolar", "jorgecortescbtis66@gmail.com"`,
                to: `"${email.email}"`,
                subject: `"${email.asunto}"`,
                html: "<h1>Constancia De Estudios</h1>",
                attachments: [
                    {
                        filename: `cl${email.numControl}cb66.pdf`,
                        path: `./api/assets/just${email.numControl}cb66.pdf`,
                        cid: `${email.email}`,
                    },
                ],
            };
            return mailOptions;
        case "forgotPassword":
            const mailOptions2 = {
                from: `"Control escolar", "jorgecortescbtis66@gmail.com"`,
                to: `"${email.correo}"`,
                subject: `"Recuperacion de contraseña"`,
                html: `<h1>Enviando recuperacion de Contraseña</h1> <br>
                      <p>Nombre: ${email.nombre}   Usuario: ${email.numControl}   contraseña: ${email.password}</p>`,
            };
            return mailOptions2;
        case "validacion":
            const validacion =
                email.op == 1
                    ? `Aceptado, sus datos son: </h3> <br><h4>Nombre: ${email.nombre}   , Usuario: ${email.numControl}  , contraseña: ${email.password}</h4>`
                    : `Rechazado, </h3>, <br><h5>favor de enviar un correo a a la siguiente direccion: Direcion@cbtis66.edu.mx</h5>`;
            const mailOptions3 = {
                from: `"Control escolar", "jorgecortescbtis66@gmail.com"`,
                to: `"${email.correo}"`,
                subject: `"Aceptacion o Rechazo"`,
                html: `<h3>Estimado Usuario se le notifica que usted ha sido ${validacion}`,
            };

            return mailOptions3;
        case "numPago":
            const mailOptions4 = {
                from: `"Control escolar", "ControlEscolarCbtis66@gmail.com"`,
                to: `"${email.correo}"`,
                subject: `"Código de Pago Constancia en Línea"`,
                html: `<h3>Estimado Usuario se le envía su código de pago :  ${email.numPago}`,
            };
            return mailOptions4;
        case "boleta":
            const mailOptions5 = {
                from: `"Control escolar", "c"`,
                to: `"${email.correo}"`,
                subject: `"Boleta de calificaciones"`,
                html: `<h3>Estimado Usuario se le envía su boleta de calificaciones del semestre :  ${email.semestre} del periodo escolar ${email.periodo} grupo ${email.grupo}`,
            };
            return mailOptions5;
        case "justificante":
           
            const mailOptions6 = {
                from: `"Orientacion Educativa", "ControlEscolarCbtis66@gmail.com"`,
                to: `"${email.correo}"`,
                subject: `"Justificante"`,
                html: `< h3 > Estimado Usuario se le envía su justificante: ${email.justificante}`,
                attachments: [
                    {
                        filename: `cl${email.numControl}cb66.pdf`,
                        path: `./api/assets/just${email.numControl}cb66.pdf`,
                        cid: `${email.correo}`,
                    },
                ],
            };
            return mailOptions6;
    }
}

module.exports = enviarCorreo;