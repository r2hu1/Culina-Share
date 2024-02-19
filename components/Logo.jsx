import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
                <h1 className="text-3xl font-bold sm:hidden flex">C<span className="text-primary">S</span>hare<span className="text-primary">.</span></h1>
            <h1 className="text-3xl font-bold hidden sm:flex"><span className="text-primary">C</span>ulina <span className="text-primary">S</span>hare</h1>
        </Link>
    )
}