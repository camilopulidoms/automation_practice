FROM node:20
WORKDIR /code
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g typescript
CMD ["tsc", "--outDir", "dist", "todo.js"]
