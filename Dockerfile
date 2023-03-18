FROM node:18-alpine

RUN mkdir -p /home/app && chown -R node:node /home/app
WORKDIR /home/app

RUN apk update
RUN apk upgrade
RUN apk add bash

COPY --chown=node:node . .

RUN npm i -g http-server

USER node


RUN yarn install

RUN npm run build

WORKDIR /home/app/public
EXPOSE 7301

CMD ["http-server", "index.js"]
