const nodemailer = require("nodemailer");

const sendMail=async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'myah.stanton65@ethereal.email',
            pass: 'CyRfAERwCXKpyFPr6x'
        },
    });

    let info = await transporter.sendMail({
        from: '"anshika <anshikapraveenparihar@gmail.com>',
        to: "29967ec@gmail.com",
        subject: "hello",
        text: "Hello world",
        html: "<b>Hello world</b>",
    });
    console.log("sent: %s",info.messageId);
    res.json(info);
};
module.exports = sendMail;