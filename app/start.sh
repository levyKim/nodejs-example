#!/bin/bash

echo 'test'

cd /usr/src/app/
npm install

cd /usr/src/app/
chmod +x /app/node_modules/.bin/nodemon

cd /usr/src/app/
npm start