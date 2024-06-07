const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      username: "john_doe",
      email: "john@example.com",
      password: "securepassword123",
    },
  });

  // Create BHHouse entries
  const bhHouse1 = await prisma.bHHouse.create({
    data: {
      userId: user.id,
      title: "Charming Bungalow",
      description: "A charming bungalow in the countryside.",
      minPrice: 100000,
      maxPrice: 150000,
      location: "Countryside",
    },
  });

  const bhHouse2 = await prisma.bHHouse.create({
    data: {
      userId: user.id,
      title: "Modern Apartment",
      description: "A modern apartment in the city.",
      minPrice: 200000,
      maxPrice: 300000,
      location: "City Center",
    },
  });

  // Create Room entries for the first BHHouse
  const room1 = await prisma.room.create({
    data: {
      listingId: bhHouse1.id,
      roomNumber: "101",
      price: 500,
      isAvailable: true,
    },
  });

  const room2 = await prisma.room.create({
    data: {
      listingId: bhHouse1.id,
      roomNumber: "102",
      price: 600,
      isAvailable: false,
    },
  });

  // Create Room entries for the second BHHouse
  const room3 = await prisma.room.create({
    data: {
      listingId: bhHouse2.id,
      roomNumber: "201",
      price: 700,
      isAvailable: true,
    },
  });

  const room4 = await prisma.room.create({
    data: {
      listingId: bhHouse2.id,
      roomNumber: "202",
      price: 800,
      isAvailable: false,
    },
  });

  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
