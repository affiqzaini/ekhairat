#base node image
FROM node:12

#create the work direcctory in the container
WORKDIR /src/app

COPY package*.json ./
RUN npm install

COPY . .
#remove env.production and move .env staging to .env
RUN rm -f .env.production && mv .env.staging .env
RUN npm install

RUN npm cache clean --force

EXPOSE 3030

#build production app
RUN npm run build

#start service
CMD [ "npm", "start" ]