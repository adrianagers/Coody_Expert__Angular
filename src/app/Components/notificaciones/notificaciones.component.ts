const nodemailer = required('notificaciones')

exports.sendEmail = (req, res) => {
    const email = req.query.email
    const name = req.query.name
    requirements(email,name, res)
}

const requirements = (email, name, res) => {
    const contentEmail = `<h1>¡Bienvenido! a Coody Expert</h1>
    Hola hemos recibido un mensaje de ${name} con el correo ${email}, por Favor comunicate.`

    sendEmailInfo('coodyExpert.morse@gmail.com','Formulario Contactanos', contentEmail, '', res)
}
const sendEmailInfo = (receiver, subject, contentEmail, contentTxt = '', res) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'coodyExpert.morse@gmail.com',
            pass:'morse666'
        }
    })
    const configEmail = {
        from: 'Coody Expert',
        to: receiver,
        subject: subject,
        text: contentTxt,
        html: contentEmail
    }
    transport.sendMail(configEmail, (error, info) =>{
        if (error){
            res.status(500).send ({
                message: 'Error al enviar el Mensaje, Intentelo más tarde o Denuevo', error
            })
        }else{
            res.status(200).send({
                message: 'Email enviado Correctamente'
            })
        }
    })
}