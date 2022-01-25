# usar a image do node
FROM node:alpine
#  local para direcionar o arquivo
WORKDIR /usr/app
# copiar esse arquivo para o WORKIR
COPY package.json ./
# usar esse comando para cirar o container
RUN npm install
# coia tudo que veio dessa instalação para dento da pasta raiz
COPY . .
# usar essa porta
EXPOSE 3000
# permite que rode os comandos que precise rodar ( no caso o script )
CMD ["npm","run","dev"]

#  docker build -t <nome da imagem e onde que ta o arq dockerfile>
#  docker build -t rentx .

#  docker run -p<mapeamento das portas> 3333:3333 rentx
#  docker run -p 3333:3333 rentx