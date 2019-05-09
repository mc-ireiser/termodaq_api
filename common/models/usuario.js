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

      console.log('token: ', response.token);
      console.log('  uid: ', response.uid);

      context.res.send(userInstance);
    });
  });
};
