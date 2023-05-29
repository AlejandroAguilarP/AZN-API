# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR api

# Copiar los archivos de la API de Apollo Server
COPY package.json .

# Instalar las dependencias de la API
RUN npm install

# Copiar el resto de los archivos de la API
COPY . .

# Exponer el puerto en el que se ejecutará el servidor de Apollo
EXPOSE 4000

# Comando de inicio para ejecutar el servidor de Apollo
CMD ["npm", "start"]
