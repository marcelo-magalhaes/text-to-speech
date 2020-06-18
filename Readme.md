# Text-to-Speech

# Baixando o projeto

Para baixar o projeto, você pode fazer o download através de um arquivo zip, 
que é encontrado no botão verde escrito clone or download, ou ainda clonar o repositório.

Para clona-lo, clique no mesmo botão verde e copie o link presente na janela que apareceu, agora abra uma sessão do terminal no seu computador e digite:

$git clone git@github.com:mallssa/text-to-speech.git

Na sequência, mude para o diretório do projeto, usando:

cd text-to-speech

# Congiguração do ambiente

O stack usada para desenvolvimento do projeto foi JavaScript, usando NodeJS no backend e ReactJs no frontend.


### Backend
Primeiro, vamos fazer a configuração do ambiente necessário para o backend.

Digite: 

cd backend

para mudar para o diretório do backend, nele encontram-se todos arquivos necessários para o funcionamento.

Digite: 

npm install

Para que assim o npm instale todos pacotes necessários para o funcionamento.

Crie um arquivo .env para fazer as configurações das váriaveis de ambiente e coloque os valores para funcionamento, sendo: 

API_KEY = (chave da api gerado pelo site da IBM cloud durante o cadastro)
API_URL = (URL da api que foi gerada pelo site da IBM cloud durante o cadastro)

PORT = (Porta que se deseja deixar o node escutando)

O último passo para o backend é a configuração do banco de dados.

No projeto já existe um arquivo docker-compose.yml que possui as diretrizes para se subir um container do docker rodando o mysql, caso já possua o docker instalado, digite:

sudo docker-compose up -d

Com isso subirá um container rodando em segundo plano com o banco de dados

Agora é necessário fazer as migrations do banco de dados.
Toda modelagem do banco está disponível no arquivo /src/database/migrations

Para executar as migrations, basta executar:

npx knex migration:latest


### Frontend

Volte para a pasta raiz do projeto e mude para a pasta front end

Digite: 

npm install

Para que sejam instaladas as depndências necessárias


# Executando o projeto

Para executar o projeto, sabendo que todo ambiente já foi configurado, será necessário executar o mesmo comando dentro do diretório do frontend e do backend

Entre em cada um dos diretórios e digite:

npm start

Com isso será iniciado o servidor usando express e o frontend usando react.

