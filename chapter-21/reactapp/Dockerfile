FROM node:18.14.0

WORKDIR /usr/src/reactapp

COPY deploy-package.json package.json
RUN echo 'package-lock=false' >> .npmrc
RUN npm install

COPY data.json server.js ./

COPY build build/

EXPOSE 4002

CMD ["node", "server.js"]
