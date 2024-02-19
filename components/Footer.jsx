import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return(
        <footer className="py-10 mt-10 px-6 md:px-20 lg:px-32">
            <div className="grid">
                <Logo/>
                <p className="text-xs opacity-80">We make it easy to find meals that fit your dietary preferences.</p>
            </div>
            <ul className="grid gap-2 py-4">
                <li className="text-sm"><Link href="/">Home</Link></li>
                <li className="text-sm"><Link href="/">About Us</Link></li>
            </ul>
            <div>
                <p className="text-sm opacity-80">© 2022 Culina Share. All rights reserved.</p>
            </div>
        </footer>
    )
}