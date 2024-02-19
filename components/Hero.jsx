import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="py-20 px-5">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Find your next meal <span className="text-primary">d</span>iscover, <span className="text-primary">s</span>hare, and <span className="text-primary">s</span>ave recipes!</h1>
                <p className="mt-2 text-[15px] text-center md:mt-3 font-normal">We make it easy to find meals that fit your dietary preferences.</p>
                <div className="flex items-center justify-center gap-2 mt-6">
                    <Button asChild><Link href="/sign-up">Get Started</Link></Button>
                    <Button variant="secondary" asChild><Link href="/explore">Explore</Link></Button>
                </div>
            </div>
        </section>
    )
}