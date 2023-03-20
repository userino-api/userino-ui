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

# commands to save image space for now
RUN yarn cache clean
RUN rm -rf node_modules
RUN rm -rf src

ENV PORT 7300

#WORKDIR /home/app/build
EXPOSE ${PORT}

CMD ["npm", "run", "serve"]
