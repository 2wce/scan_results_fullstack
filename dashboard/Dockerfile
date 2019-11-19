# Use an official node runtime as a parent image
FROM node:8-alpine

WORKDIR /usr/frontend

# Install dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn

# Add rest of the client code
COPY . .

EXPOSE 3000

CMD npm start