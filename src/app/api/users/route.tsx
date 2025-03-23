import { getAllUsers, getUserByEmail, findUser, createUserHandler } from "@/(backend)/controllers/userController";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  const password = url.searchParams.get("password");
  
  if(email && password){
    return findUser(email, password); // loging
  }else if(email){
    return getUserByEmail(email); // Find user by email
  }
  return getAllUsers(); // Return all users
}

export async function POST(req: Request) {
  return createUserHandler(req);
}
