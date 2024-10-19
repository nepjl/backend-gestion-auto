import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function main(){
  try{
    await prisma.$connect();
    console.log(`Connexion à la base de données établie`);
    
  } catch(erreur){
    console.log(`Erreur de connexion à la base de données : `, erreur);
    
  }
}

main();