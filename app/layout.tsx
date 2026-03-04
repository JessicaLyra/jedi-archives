import "./globals.css";
import Template from "./Template";
import TransitionProvider from "@/components/TransitionProvider";


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
      <body>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
