FROM node:lts-alpine AS dev
WORKDIR /client
COPY *.json ./
COPY index.html ./
RUN npm i
COPY src src
EXPOSE 5173
CMD ["npm", "run", "dev"]
