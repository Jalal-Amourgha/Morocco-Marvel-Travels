import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { email, name, password } = await req.json();

    await connectToDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email: email,
      name: name,
      password: hashedPassword,
      birthday: "",
      location: "",
      phoneNumber: "",
      trips: [],
      paymentDetails: {},
    });

    return NextResponse.json({ message: "User Registed" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Something  wrong" }, { status: 500 });
  }
}
