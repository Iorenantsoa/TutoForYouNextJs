// import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SessionProvider";
import ReactToast from "@/components/reactToastify/ReactToast";

export const metadata = {
  title: "TutoForYou",
  description: "Tuto for you",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en" className="scroll-smooth">
      <body > 
        <AuthProvider session={session}> 
          {children}
          <ReactToast/>
        </AuthProvider>
      </body>
        
    </html>
  );
}
