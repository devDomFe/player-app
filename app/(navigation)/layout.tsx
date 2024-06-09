import "../globals.css";

//fonts
import {
  poppins,
  hankenGrotesk,
  russoOne,
  paytoneOne,
  montserrat,
} from "@/utils/Fonts";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex flex-col items-center ${paytoneOne.variable} ${montserrat.variable} ${hankenGrotesk.variable} ${russoOne.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
