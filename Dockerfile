FROM node:14

# RUN apk add --no-cache libc6-compat openssl

WORKDIR /app


COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
# RUN npm install -g nodemon
RUN npx prisma generate
#RUN npx prisma init --datasource-provider postgresql
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]