import { PrismaClient } from "@prisma/client";
import app from "./app";

const PORT = process.env.PORT || 3003;

const prisma = new PrismaClient();

async function main() {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
}

main();
