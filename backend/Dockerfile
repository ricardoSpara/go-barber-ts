FROM node:14

ENV PORT=3333

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE $PORT

CMD [ "yarn", "dev:server"]
