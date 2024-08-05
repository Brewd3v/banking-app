export default function Home({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            sidebar
            {children}
        </main>
    );
}
