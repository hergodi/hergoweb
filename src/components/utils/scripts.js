import { USER_MAIL,PASSWD_MAIL } from './constanst.js';

export function enviaCorreo(formData){
    const express = require('express');
    const bodyParser = require('body-parser');
    const nodemailer = require('nodemailer');

    const app = express();
    app.use(bodyParser.json());

    app.post({SERVER_MAIL}, (req, res) => {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: {USER_MAIL},
            pass: {PASSWD_MAIL},
        },
        });

        const mailOptions = {
        from: formData.email,
        to: {USER_MAIL},
        subject: formData.subject,
        text: 'Nombre: ${formData.name}\nCorreo Electrónico: ${formData.email}\n\n${formData.message}',
        };

        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ message: 'Error al enviar el correo' });
        } else {
            console.log('Correo enviado:', info.response);
            res.status(200).json({ message: 'Correo enviado con éxito' });
        }
        });
    });

    app.listen(3001, () => {
        console.log('Servidor escuchando en el puerto 3001');
    });
}