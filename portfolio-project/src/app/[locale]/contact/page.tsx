"use client";
import ContactForm from "../../../components/ContactForm";
import NavBar from "../../../components/NavBar";

export default function contactMePage() {
    return (
        <div className="page-container">
            <NavBar/>
            <main className="main-container">
                <div className="sm:mt-24 lg:w-1/3 p-4 rounded-2xl shadow-md text-xs sm:text-lg bg-gray-300">
                    <ContactForm/>
                </div>
            </main>    
        </div>
    )
}