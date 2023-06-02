FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY /build .
COPY .env .

EXPOSE 3333
CMD ["node", "server.js"]
