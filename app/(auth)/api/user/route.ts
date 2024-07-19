import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";

//Schema for input validation
const userSchema = z
    .object({
        username: z
        .string()
        .min(1, 'Username is required')
        .max(100),
        email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
        password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must consist at least 8 characters'),
    })
    
export async function POST(req: Request){
    try{
        const body = await req.json();
        const {email, username, password} = userSchema.parse(body);

        //Handle duplicate e-mail
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        })
        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "This email has already been used"}, {status : 409})
        }

        //Handle duplicate username
        const existingUserByUsername = await db.user.findUnique({
            where: {username: username}
        })
        if(existingUserByUsername){
            return NextResponse.json({user: null, message: "This username is taken"}, {status:409})
        }

        const encryptedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data:{
                username,
                email,
                password : encryptedPassword
            }
        })
        const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({ user: rest, message: "User created succesfully!"}, { status: 201 });
    }catch(error){
        return NextResponse.json({message: "Something went wrong!"}, { status: 201 });
    }
}