import Header from "@/components/Header";

export default function RootLayout({ children }) {
    return (
        <main>
            <Header/>
            {children}
        </main>
    );
}