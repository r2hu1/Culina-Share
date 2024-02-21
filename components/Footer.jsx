import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
        <footer className="py-10 mt-10 px-6 md:px-20 lg:px-32 print:hidden">
            <div className="grid">
                <div className="w-full flex items-center justify-between">
                    <Logo />
                    <ModeToggle />
                </div>
                <p className="text-xs opacity-80">We make it easy to find meals that fit your dietary preferences.</p>
            </div>
            <ul className="grid gap-2 py-4">
                <li className="text-sm"><Link className="hover:text-primary" href="/">Home</Link></li>
                <li className="text-sm"><Link className="hover:text-primary" href="/about-us">About Us</Link></li>
            </ul>
            <div>
                <p className="text-sm opacity-80">© 2022 Culina Share. All rights reserved.</p>
            </div>
        </footer>
    )
}
