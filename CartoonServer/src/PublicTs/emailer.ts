// tslint:disable-next-line: no-var-requires
const nodemailer = require('nodemailer');

const smtpConfig = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '392499367@qq.com',
        pass: 'mbbkzapjcuufbihj',
    },
};

const transporter = nodemailer.createTransport(smtpConfig);

const sendmail = (html1: string, poster: string) => {
    const option = {
        from: '392499367@qq.com',
        to: poster,
        subject : 'Cartoon校验码',
        html : html1,
    };
    transporter.sendMail(option, (error, response) => {
        if (error) {
            // tslint:disable-next-line: no-console
            console.log('fail:' + error);
        } else {
            // tslint:disable-next-line: no-console
            console.log('success:' + response.messageID);
        }
    });
};

export {nodemailer, smtpConfig, transporter, sendmail};
