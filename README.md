## Rodando projeto

### npm install
### Após setar o arquivo .env com DATABASE_URL e DATABASE_PASSWORD do banco de dados mongoDb
### Rodar o comando npm run dev para ambiente de desenvolvimento. Para ambiente de produção npm run build.

## Rotas

Admin

login : http://127.0.0.1:5000/auth/login
{
	"email": "exemple@gmail.com",
	"password": "123123123"
}
### signup : http://127.0.0.1:5000/auth/signup
exemple
{
	"username": "exemple",
	"password": "123123123",
	"email": "exemple@gmail.com",
	"name": "exemple exemple",
	"isAdmin": "true"
}
############################

Products

### get all products : http://127.0.0.1:5000/api/product

### post product : http://127.0.0.1:5000/api/product
exemple
schema {
  "name": "Produto 1",
  "qty": 10,
  "price": 9.99,
  "categories": ["642e371053be71a870c65d3a"]
}

### delete by id : http://127.0.0.1:5000/api/product/:idproduct

### patch product : http://127.0.0.1:5000/api/product/:idproduct
exemple
schema {
  "name": "Cafezinho",
  "qty": 10,
  "price": 10.99,
  "categories": ["642e371053be71a870c65d3a"]
}

### get category : http://127.0.0.1:5000/category

Utilizei apenas javascript puro, pois ainda não me sinto confortável em utilizar typescript no backend,
porém ja venho utilizando no front end com Nextjs.

tecnologias
bcryptjs - popular e fácil de utilizar para encriptografar.
cors - para deixar a aplicação acessível de um mesmo local.
dotenv - para utilizar variáveis ambiente em desenvolvimento.
express - framework que aprendi mais no backend, mas também sei um pouco de Nestjs.
helmet - para proteger um pouco mais a aplicação express.
jsonwebtoken - assinar e verificar tokens de autenticação baseados em JSON.
mongoose - ORM voltado para mongoDb, porém sei também um pouco de prismaORM e sequelize para trabalhar com SQL.
morgan - popular middewate pra nodejs, muito popular.
path - para trabalhar melhor diretórios e caminhos dentro das pastas do projeto.

