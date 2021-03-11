FROM node:15.5.0
ENV NODE_ENV=development

WORKDIR /app


COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --development

COPY . .

CMD ["npm", "run", "dev"]