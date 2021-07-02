const Validator = require('fastest-validator');
const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const services = require('./services');
const privateKey  = fs.readFileSync(path.join(__dirname,'private.key'))

const v = new Validator();

module.exports = {
  auth: async ctx => {
    const { request: { body }, response } = ctx;
    const schema = {
      email: { max: 255, min: 5, type: 'string' },
      password: { max: 16, min: 8, type: 'string' },
    }

    const erros = v.validate(body, schema);

    if (Array.isArray(erros) && erros.length) {
      response.status = 400;
      return response.body = Boom.badRequest(null, erros);
    }

    const user = await services.auth(body);

    if (user) {
      response.body = {
        firstName: user.firstName,
        result: jwt.sign({ email: user.email }, privateKey)
      }; 
    } else {
      response.status = 401
      response.body = { result: Boom.unauthorized() };
    }
  }
}