"use server";
import { currentUser } from "@clerk/nextjs";

export const getCurrentUserData = async () => {
    const user = await currentUser();
    if (user?.firstName && user?.imageUrl) {
        return {
            "firstName": user.firstName,
            "lastName": user.lastName,
            "imageUrl": user.imageUrl,
            "email": user.emailAddresses[0].emailAddress
        };
    }
};