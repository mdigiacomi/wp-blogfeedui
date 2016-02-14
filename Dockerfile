FROM nginx

COPY . /usr/share/nginx/html

RUN apt-get -y update && apt-get -y install wget git-core npm nodejs

RUN  npm install -g bower && ln -s /usr/bin/nodejs /usr/bin/node

RUN cd /usr/share/nginx/html/ && bower --allow-root install

EXPOSE 80
EXPOSE 443
