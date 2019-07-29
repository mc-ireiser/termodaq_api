'use strict';

module.exports = function(server) {
  const router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
