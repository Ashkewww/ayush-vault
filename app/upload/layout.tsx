import NavBar from "@/components/navbar-listing";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <NavBar isUpload={true} />
            {children}
        </section>
    );
}