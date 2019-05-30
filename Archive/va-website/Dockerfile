# based on https://github.com/nodejs/docker-node/blob/master/4.7/slim/Dockerfile

FROM node:8

# Match the jenkins uid/gid on the host (504)
RUN groupadd --gid 504 jenkins \
  && useradd --uid 504 --gid jenkins --shell /bin/bash --create-home jenkins

ENV YARN_VERSION 1.5.1
ENV NODE_ENV production

RUN apt-get update && apt-get install -y netcat \
  && npm install -g yarn@$YARN_VERSION \
  && npm install -g nsp \
  && npm install -g s3-cli \
  && npm install -g codeclimate-test-reporter \
  && chmod +x /usr/local/lib/node_modules/yarn/bin/yarn.js

RUN mkdir -p /application

WORKDIR /application

USER jenkins
