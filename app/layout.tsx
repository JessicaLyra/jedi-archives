import "./globals.css";

export const metadata = {
  title: "Jedi Archives",
  description: "Sistema interno da Ordem Jedi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
