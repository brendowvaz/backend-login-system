const db = require('../../_db/models');

module.exports = {
  auth: payload => {
    const search = {
      email: payload.email
    } 
    return db.User.findOne({ where: search });
  }
}