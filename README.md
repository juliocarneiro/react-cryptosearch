# CryptoSearch
Projeto de teste desenvolvido para a empresa SQUAD onde os dados de criptomoedas sao baixados por uma api livre, eles sao mostrados na tela de acordo com o nome digitado na busca.

## Ambiente de teste

Instalar dependencias:

`yarn`

Rodar servidor de teste:

`yarn start`

Buildar o app:

`yarn build`

Output url: [http://localhost:3000](http://localhost:3000)

## Ambiente de producao

Build Docker image:

`docker build -t cryptosearch .`

Run docker image:

`docker run -dit -p 8080:5000 cryptosearch`

Output url: [http://localhost:8080](http://localhost:8080)