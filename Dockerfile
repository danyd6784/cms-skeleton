
FROM node:22-alpine

WORKDIR /app

COPY src/server/package*.json ./

RUN npm ci

COPY src/server/ ./

EXPOSE 3000

CMD ["npm", "start"]
