import Link from "next/link";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export default async function Hero() {
    const user = await currentUser();

    return (
        <>
            <div className={cn("hidden", user && "block mb-5")}></div>
            <section className={cn("py-20 px-5", user && "hidden")}>
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">Find your next meal <span className="text-primary">d</span>iscover, <span className="text-primary">s</span>hare, and <span className="text-primary">s</span>ave recipes!</h1>
                    <p className="mt-2 text-[15px] text-center md:mt-3 font-normal">We make it easy to find meals that fit your dietary preferences.</p>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <Button asChild><Link href="/sign-up">Get Started</Link></Button>
                        <Button variant="secondary" asChild><Link href="#explore">Explore</Link></Button>
                    </div>
                </div>
            </section>
        </>
    )
}