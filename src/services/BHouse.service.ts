import { authOptions } from "@/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export const getBHousePostedByUser = async (userId: string) => {
  try {
    const data = await prisma.bHHouse.findMany({ where: { userId } });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBHouse = async (id: string) => {
  try {
    const data = await prisma.bHHouse.findFirst({ where: { id } });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBHouses = async () => {
  try {
    const data = await prisma.bHHouse.findMany({});
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBHRooms = async (listingId: string | undefined) => {
  try {
    const data = await prisma.room.findMany({ where: { listingId } });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postBHouse = async (newBHouse: IBHouse) => {
  try {
    const session = await getServerSession(authOptions);
    if (session) {
      const data = await prisma.bHHouse.create({
        data: { ...newBHouse, userId: session?.user.id },
      });
      return data;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const postRoom = async (newRoom: IRoom) => {
  try {
    const data = await prisma.room.create({
      data: newRoom,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStatistics = async () => {
  try {
    const bhouses = await prisma.bHHouse.count({});
    const users = await prisma.user.count({});
    const rooms = await prisma.room.count({ where: { isAvailable: true } });

    const data = [
      {
        name: "Registered Users",
        count: users,
      },
      {
        name: "Boardng Houses",
        count: bhouses,
      },

      {
        name: "Available Rooms",
        count: rooms,
      },
    ];

    if (data) {
      return data;
    }

    return null;
  } catch (error) {
    throw error;
  }
};
