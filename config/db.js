import { PrismaClient } from '@prisma/client';
// const { PrismaClient } = pkg;

const prisma = new PrismaClient();

 export async function main() {
    try {
      await prisma.$connect();
      console.log('Connexion à la base de données établie');
    } catch (error) {
      console.error('Erreur de connexion à la base de données:',error);
    }
  }
  main()

  // export async function main() {
//     try {
//         await prisma.$connect();
//         console.log('Connexion à la base de données établie');
//     } catch (error) {
//         console.error('Erreur de connexion à la base de données:', error);
//         throw error; // Propager l'erreur pour la gérer dans le serveur
//     }
// }


// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()



// export async function main() {
//   try {
//       await prisma.$connect();
//       console.log('Connexion à la base de données établie');
//   } catch (error) {
//       console.error('Erreur de connexion à la base de données:', error);
//       throw error; // Propager l'erreur pour la gérer dans le serveur
//   }
//}
