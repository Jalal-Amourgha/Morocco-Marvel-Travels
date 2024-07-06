import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcryptjs";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const infos = await User.findOne({
      email: params.id,
    }).populate("name");

    return new Response(JSON.stringify(infos), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user infos", {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const { type, item, paymentDetails } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const userInfo = await User.findOne({
      email: params.id,
    });

    if (!userInfo) {
      return new Response("User not found", { status: 404 });
    }

    if (type === "booking") {
      userInfo.trips = [...userInfo.trips, item];
    } else if (type === "personal-info") {
      userInfo.name = item.name;
      userInfo.birthday = item.birthday;
      userInfo.phoneNumber = item.phoneNumber;
      userInfo.location = item.location;
    } else if (type === "personal-security") {
      const hashedPassword = await bcrypt.hash(item.newPassword, 10);
      userInfo.password = hashedPassword;
    } else if (type === "payment-details") {
      userInfo.paymentDetails = paymentDetails;
    }

    await userInfo.save();

    return new Response("Successfully updated the UserInfo", { status: 200 });
  } catch (error) {
    return new Response("Error Updating UserInfo", { status: 500 });
  }
};
