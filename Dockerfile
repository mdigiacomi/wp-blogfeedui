FROM node:4.4.7

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy Project to Docker Container
COPY . /usr/src/app/

RUN npm install -g http-server
RUN npm install
RUN ls
RUN ls /usr/src/app/

CMD [ "http-server", " -p 80 -d -i /usr/src/app/" ]
EXPOSE 80