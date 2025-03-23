import { NextResponse } from "next/server";
import { UserModel } from "@/(backend)/models/User";
import bcrypt from "bcrypt";

export async function getAllUsers() {
  try {
    const users = await UserModel.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message || "Internal Server Error" }, { status: 500 });
  }
}

export async function getUserByEmail(email:string) {
      const users = await UserModel.findOne({ email });
      if (!users) return NextResponse.json({ message: "User not found" }, { status: 404 });
      return NextResponse.json(users);
}

export async function findUser(email:string, password:string) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
  return NextResponse.json({ message: "Login successful", user });
}

export async function createUserHandler(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email , password:hashedPassword });
    await newUser.save();
    return NextResponse.json({ message: hashedPassword }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message || "Internal Server Error" }, { status: 500 });
  }
}
