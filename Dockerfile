FROM node:14
WORKDIR /bytebank
COPY . .
RUN npm install
RUN npm install @angular/core
RUN npm install @angular/cli
ENTRYPOINT NG SERVE
