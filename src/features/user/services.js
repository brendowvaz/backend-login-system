const db = require('../../_db/models');

module.exports = {
  create: payload => {
    return db.User.create(payload);
  }
}