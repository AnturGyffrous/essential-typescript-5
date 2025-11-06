FROM node:18.14.0

WORKDIR /usr/src/webapp

COPY assets /usr/src/webapp/assets
COPY dist /usr/src/webapp/dist

COPY data.json server.js /usr/src/webapp/
COPY deploy-package.json /usr/src/webapp/package.json

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]
