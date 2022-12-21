FROM node:18

RUN mkdir -p /app
WORKDIR /app
COPY package*.json .
RUN npm install
RUN ls -la
EXPOSE 8000
COPY ./.dockerignore .
COPY ./.gitignore .
COPY ./app.js .
CMD [ "node", "app.js" ]