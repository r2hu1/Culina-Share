import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return(
        <main>
            {children}
            <Footer/>
        </main>
    )
}