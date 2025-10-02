import "./globals.css";

export const metadata = {
    title: "My App",
    description: "Next 15 + Tailwind",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
