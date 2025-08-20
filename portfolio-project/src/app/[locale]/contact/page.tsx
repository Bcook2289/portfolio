"use client";
import ContactForm from "../../../components/ContactForm";
import NavBar from "../../../components/NavBar";

export default function contactMePage() {
    return <div className="dark:text-white text-black bg-white dark:bg-black w-full min-h-screen">
        <NavBar/>
        <main className="font-sora flex-grow flex items-center justify-center">
            <div className="max-w-md p-4 rounded-2xl shadow-md w-2xl text-lg bg-gray-300">
                <ContactForm/>
            </div>
        </main>
        
    </div>
}