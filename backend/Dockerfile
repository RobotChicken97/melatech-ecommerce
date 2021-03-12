FROM node:15.5.0
ENV NODE_ENV=development
ENV PORT=$PORT

WORKDIR /app

RUN mkdir -p /app/node_modules && chown -R node:node /app/node_modules

COPY package.*json /app/

RUN npm install --development

COPY --chown=node:node . .

EXPOSE $PORT

CMD ["npm", "run", "dev"]