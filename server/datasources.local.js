/* eslint-disable camelcase */
/* eslint-disable comma-dangle */

'use strict';

module.exports = {
  db_mongo: {
    connector: 'mongodb',
    name: 'db_mongo',
    url: process.env.DB_URL || '',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || 'termodaq',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || ''
  },

  sendgrid: {
    connector: 'loopback-connector-sendgrid',
    api_key: process.env.SENDGRID_KEY
  },

  email: {
    name: 'email',
    connector: 'mail',
    transports: [{
      type: process.env.EMAIL_TYPE,
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    }]
  }
};
