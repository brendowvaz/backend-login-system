const Validator = require('fastest-validator');
const Boom = require('@hapi/boom');
const services = require('./services');
const bcrypt = require('bcryptjs');

const v = new Validator();

module.exports = {
  create: async ctx => {
    const { request: { body }, response } = ctx;
    const schema = {
      firstName: { max: 60, min: 1, type: 'string' },
      lastName: { max: 60, min: 1, type: 'string' },
      email: { max: 255, min: 5, type: 'string' },
      password: { max: 16, min: 8, type: 'string' },
    }

    const erros = v.validate(body, schema);

    if (Array.isArray(erros) && erros.length) {
      response.status = 400;
      return response.body = Boom.badRequest(null, erros);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);

    body.password = hash;

    const user = await services.create(body);
    response.body = user;
  }
}