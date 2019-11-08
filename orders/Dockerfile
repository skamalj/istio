FROM node:10

COPY . /home/orders

RUN ls -l /home

RUN ls -l /home/orders

WORKDIR /home/orders

RUN npm install

CMD ["node", "app.js"]
