FROM node:22

WORKDIR /app

COPY package.json package-lock.json twitter.js ./
RUN npm install

ENTRYPOINT ["node", "/app/twitter.js"]
