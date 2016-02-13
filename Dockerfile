FROM nginx

COPY . /usr/share/nginx/html

RUN sudo apt-get install wget

RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

RUN ~/.nvm/nvm.sh install v0.12.7

RUN ~/.nvm/npm install 

EXPOSE 80
EXPOSE 443
