"use client";
import ContactForm from "../../../components/ContactForm";
import NavBar from "../../../components/NavBar";

export default function contactMePage() {
    return (
        <div className="dark:text-white text-black bg-white dark:bg-black w-full min-h-screen flex flex-col">
            <NavBar/>
            <main className="font-sora flex items-center justify-center">
                <div className="mt-24 sm:w-1/3 p-4 rounded-2xl shadow-md text-lg bg-gray-300">
                    <ContactForm/>
                </div>
            </main>    
        </div>
    )
}