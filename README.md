# Sistema de login
API para um sistema de login em Node.js

# Tecnologias utilizadas
- Sequelize
- Koa
- Crypto
- Bcrypt
- JsonWebToken
- Banco de dados: SQLite3

# Como rodar o projeto?

- Clone o projeto para sua máquina local,<br />
- Utilize o comando `yarn` para instalar as dependências, <br />
- Execute `yarn dev` para rodar o projeto localmente. <br />
  O servidor estará rodando em `http://localhost:3333`. <br />
  **login: `http://localhost:3333/v1/api/auth` <br />
  register:** `http://localhost:3333/v1/api/user`
  
## Cadastrando novo usuário
Faça uma requisição POST para `http://localhost:3333/v1/api/user`, contendo **firstName**, **lastName**, **email** e **password**:
```json
{
	"firstName": "nome",
	"lastName": "sobrenome",
	"email": "user@dominio.com",
	"password": "senha"
}
```
Caso os dados de cadastro estejam preenchidos corretamente, será cadastrado o novo usuário no banco de dados com a senha criptografada. <br />
<br />
**Exemplo:** <br />
![Cadastro](https://github.com/brendowvaz/assets/raw/master/backend-login-system/register.png)

## Logando
Faça uma requisição POST para `http://localhost:3333/v1/api/auth`, contendo **email** e **password**:
```json
{
	"email": "user@dominio.com",
	"password": "senha"
}
```
Caso o email e senha estejam corretos, será gerado um token de acesso. <br />
<br />
**Exemplo:** <br />
![Login_1](https://github.com/brendowvaz/assets/raw/master/backend-login-system/login.png) <br />

Em caso de email ou senha inválida, o login não será autorizado e não será gerado token. <br />
<br />
**Exemplo:** <br />
![Login_2](https://github.com/brendowvaz/assets/raw/master/backend-login-system/unathorized.png)
# Autor

Brendow Ferreira Vaz <br />
https://www.linkedin.com/in/brendow-ferreira-vaz-543680212/

