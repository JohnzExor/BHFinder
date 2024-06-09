import prisma from "@/lib/db";
import { signOut } from "next-auth/react";

import { compare, hash } from "bcryptjs";

export const getUserProfile = async (id: string | undefined) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("Email not found");
    }
    const comparePassword = await compare(password, user.password as string);

    if (!comparePassword) {
      throw new Error("Invalid Password");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

export const postUserData = async (userData: IUser) => {
  try {
    const checkEmail = await prisma.user.findFirst({
      where: { email: userData.email },
    });
    if (checkEmail) {
      return null;
    }

    const hashPWD = await hash(userData.password as string, 10);

    const data = await prisma.user.create({
      data: { ...userData, password: hashPWD },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postUserSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};
