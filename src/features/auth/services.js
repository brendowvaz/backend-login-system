const db = require('../../_db/models');

module.exports = {
  auth: payload => {
    return db.User.findOne({ where: payload });
  }
}