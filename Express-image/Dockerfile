# Specify a base image
## alpine is the smallest and the most compresed image as posible
FROM node:alpine
## setting up the work-direcory
WORKDIR ./usr/app
## copying the package.com to install dependencies 
COPY ./package.json ./
## Install dependencies
RUN npm install
##so as to stop runing npm i again and again
COPY ./ ./

## Starts the project
CMD ["npm","start"]