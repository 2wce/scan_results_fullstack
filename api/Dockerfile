FROM node:8-alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true

RUN yarn

COPY . .

# Run the container under "node" user by default
USER node

EXPOSE 4000

CMD ["npm", "start"]
