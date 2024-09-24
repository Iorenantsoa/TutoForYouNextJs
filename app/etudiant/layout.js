
import NavbarOnAuth from "@/components/onAuth/NavbarOnAuth";
import "../globals.css";
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SessionProvider";
import ReactToast from "@/components/reactToastify/ReactToast";
import Contact from "@/components/homeComponents/Contact";

export const metadata = {
    title: "TutoForYou",
    description: "Tuto for you",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession()
    return (
        <div  >
            <AuthProvider session={session}>
                <NavbarOnAuth />
                <div className="min-h-[90vh]  flex flex-col justify-between ">
                    <div className="flex-grow ">
                        {children}
                    </div>
                    <div className="flex-grow-0 bg-black">
                        <Contact />
                    </div>
                </div>
                <ReactToast />
            </AuthProvider>
        </div>


    );
}