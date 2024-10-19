# backend-gestion-auto

touch server.js .env
mkdir routes/ controllers/ models/ config/
npm init -y

//install les dependencies
npm i express bcrypt jsonwebtoken dotenv prisma cors nodemon

npm install @prisma/client

npx prisma generate

# Modifiez schema.prisma pour ajouter binaryTargets
# Puis exécutez
npx prisma generate
npm install
# Déployez à nouveau votre application

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-3.0.x"]
}

npx prisma generate




