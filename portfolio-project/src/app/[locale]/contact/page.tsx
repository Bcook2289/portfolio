"use client";
import ContactForm from "../../../components/UI/ContactForm";
import NavBar from "../../../components/UI/NavBar";

export default function contactMePage() {
  return (
    <div className="page-container">
      <NavBar />
      <main className="main-container">
        <div className="m-16 sm:mt-24 w-2/3 lg:w-1/3 p-4 rounded-2xl shadow-md text-xs sm:text-lg bg-gray-300">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
