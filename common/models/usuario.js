'use strict';

var path = require('path');

module.exports = function(Usuario) {
  // send verification email after registration
  Usuario.afterRemote('create', function(context, userInstance, next) {
    console.log('> Usuario.afterRemote triggered');

    var options = {
      type: 'email',
      to: userInstance.email,
      from: process.env.EMAIL_FROM,
      subject: 'Gracias por registrarte.',
      protocol: process.env.EMAIL_LOCAL_SERVER_PROTOCOL,
      host: process.env.API_HOST,
      port: process.env.EMAIL_LOCAL_SERVER_PORT,
      template: path.resolve(__dirname, '../templates/email-verify.ejs'),
      html: path.resolve(__dirname, '../templates/email-verify.ejs'),
      redirect: process.env.FRONT_VERIFIED,
      user: Usuario,
    };

    userInstance.verify(options, function(err, response, next) {
      if (err) return next(err);

      console.log('> verification email sent:');
      context.res.send(userInstance);
    });
  });

  Usuario.on('resetPasswordRequest', function(info) {
    console.log('> Usuario.resetPasswordRequest triggered');

    let portNumber;
    let protocol = process.env.EMAIL_LOCAL_SERVER_PROTOCOL;
    let portELS = process.env.EMAIL_LOCAL_SERVER_PORT;

    if (protocol == 'http' && portELS == 443) {
      portNumber = '';
    } else {
      portNumber = ':' + process.env.EMAIL_LOCAL_SERVER_PORT;
    }

    Usuario.app.models.Email.send({
      type: 'email',
      to: info.email,
      from: process.env.EMAIL_FROM,
      subject: 'Reinicio de password.',
      // template: path.resolve(__dirname, '../templates/email-verify.ejs'),
      // html: path.resolve(__dirname, '../templates/email-verify.ejs'),
      text: protocol + '://' + process.env.API_HOST + portNumber +
      '/reset-your-password.html?access_token=' + info.accessToken.id,
    }, function(err) {
      if (err) return console.log('> error sending password reset email');

      console.log('> sending password reset email to:', info.email);
    });
  });
};
