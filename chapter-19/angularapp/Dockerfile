FROM node:18.14.0

WORKDIR /usr/src/angularapp

COPY dist dist/

COPY data.json server.js ./
COPY deploy-package.json package.json

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4001

CMD ["node", "server.js"]
