FROM node:10

RUN mkdir -p /app
RUN mkdir -p /common
WORKDIR .

COPY microservices/back-end/package.json /package.json

RUN npm install

WORKDIR /app

COPY microservices/back-end/node-micro/package.json /app/package.json

RUN npm install swagger -g

RUN npm install

COPY microservices/back-end/node-micro /app

COPY microservices/back-end/common /common

EXPOSE 3000

ENV DB_HOST=db


CMD ["npm", "start"]
