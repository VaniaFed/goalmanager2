FROM node

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npx", "vite", "--host", "0.0.0.0"]