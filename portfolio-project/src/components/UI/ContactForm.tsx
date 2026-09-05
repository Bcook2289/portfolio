"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
    const t = useTranslations("contact");
    const [ contactFormStatus, setContactFormStatus ] = useState<string | null>(null);

    async function submitRequest(request:React.FormEvent<HTMLFormElement>) {
        request.preventDefault();

        const form = request.currentTarget;
        const formData = new FormData(form);

        if(formData.get("honeypot")) {
            return;
        }

        setContactFormStatus("submitting");

        try{
            const response = await fetch("https://formspree.io/f/mpwlgldw", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                },
            }
        );

            if(response.ok) {
                setContactFormStatus("success");
                form.reset();
            } else {
                setContactFormStatus("fail");
            }
        } catch(error) {
            console.log(error);
            setContactFormStatus("fail");
        }
    }
    return (
        <section className='min-h-screen px-6 py-20 sm:px-10 lg:px-16'>
            <div className='mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl flex-col'>
                {/* SECTION LABEL */}
                <div className="mb-12 flex items-center gap-4">
                    <span className="font-jetbrains text-xs font-medium tracking-wider sm:text-sm">
                        03 / CONTACT
                    </span>
                    <span className="h-px flex-1 bg-black dark:bg-white" />
                </div>
                {/* CONTACT CONTENT */}
                <div className='grid flex-1 items-center gap-16 md:grid-cols-[0.8fr_1.2fr] md-20'>
                    {/* INTRO */}
                    <div>
                        <h2 className='font-sora text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
                            {t("contactMe")}
                        </h2>
                        <p>
                            {t("question")}
                        </p>
                        {/* SOCIAL LINKS */}
                        <div className='mt-8 flex gap-6 font-jetbrains text-xs font-medium tracking-wider sm:text-sm'>
                            <Link 
                                href="https://github.com/Bcook2289" 
                                target='_blank'
                                rel="noopener noreferrer"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    border
                                    border-black
                                    px-4 py-2
                                    font-sora
                                    text-sm
                                    font-semibold
                                    transition-colors
                                    duration-300
                                    hover:bg-black
                                    hover:text-white
                                    dark:border-white
                                    dark:hover:bg-white
                                    dark:hover:text-black
                                "
                            >
                                <span
                                    aria-hidden="true"
                                    className="
                                        mr-2
                                        inline-block
                                        -translate-x-2
                                        opacity-0
                                        transition-all 
                                        duration-300 
                                        group-hover:translate-x-0
                                        group-hover:opacity-100
                                    " 
                                >
                                    [
                                </span>
                                    GitHub
                                <span
                                    aria-hidden="true"
                                    className="
                                        ml-2
                                        inline-block
                                        translate-x-2
                                        opacity-0
                                        transition-all 
                                        duration-300 
                                        group-hover:translate-x-0
                                        group-hover:opacity-100
                                    "
                                >
                                    ]
                                </span>
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/bcook2289" 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='
                                    group
                                    inline-flex
                                    items-center
                                    border
                                    border-black
                                    px-4 py-2
                                    font-sora
                                    text-sm
                                    font-semibold
                                    transition-colors
                                    duration-300
                                    hover:bg-black
                                    hover:text-white
                                    dark:border-white
                                    dark:hover:bg-white
                                    dark:hover:text-black
                                '
                            >
                                <span
                                    aria-hidden="true"
                                    className="
                                        mr-2
                                        inline-block
                                        -translate-x-2
                                        opacity-0
                                        transition-all 
                                        duration-300 
                                        group-hover:translate-x-0
                                        group-hover:opacity-100
                                    " 
                                >
                                    [
                                </span>
                                    LinkedIn
                                <span
                                    aria-hidden="true"
                                    className="
                                        ml-2
                                        inline-block
                                        translate-x-2
                                        opacity-0
                                        transition-all 
                                        duration-300
                                        group-hover:translate-x-0
                                        group-hover:opacity-100
                                    "
                                >
                                    ]
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* FORM */}
                    <div>
                        {contactFormStatus === "success" ? (
                            <div className='border-t border-black pt-6 dark:border-white'>
                                <p className="font-sora text-lg font-medium sm:text-xl">
                                    {t("thankYou")}
                                </p>
                            </div>
                            ) : (
                                <form 
                                    onSubmit={submitRequest} 
                                    className= "flex flex-col"
                                >
                                    {/* EMAIL */}
                                    <label 
                                        htmlFor='email' 
                                        className='font-jetbrains text-xs font-medium tracking-wider'
                                    >
                                        {t("emailAddress")}
                                    </label>
                                    <input 
                                        id='email' 
                                        type='email' 
                                        name='email' 
                                        placeholder='your@email.com'
                                        required 
                                        className='
                                            mt-3 
                                            w-full
                                            border-b
                                            border-black
                                            bg-transparent
                                            px-3 py-3
                                            font-sora
                                            text-sm
                                            text-black
                                            outline-none
                                            transition-all
                                            duration-300
                                            placeholder:text-gray-500
                                            focus:border-black
                                            dark:border-white
                                            dark:text-white
                                            dark:placeholder:text-gray-400
                                            dark:focus:border-white
                                            dark:focus:bg-white
                                            dark:focus:text-black
                                        '
                                    />
                                    {/* MESSAGE */}
                                    <label 
                                        htmlFor='message' 
                                        className='mt-8 font-jetbrains text-xs font-medium tracking-wider'
                                    >
                                        {t("message")}
                                    </label>
                                    <textarea 
                                        id='message' 
                                        name='message' 
                                        required rows={5} 
                                        placeholder="Let's talk"
                                        className='
                                            mt-3
                                            w-full
                                            resize-none
                                            border-b
                                            border-black
                                            bg-transparent
                                            px-3 py-3
                                            font-sora
                                            text-sm
                                            outline-none
                                            transition-all
                                            duration-300
                                            placeholder:text-gray-500
                                            focus:border-black
                                            dark:border-white
                                            dark:text-white
                                            dark:placeholder:text-gray-400
                                            dark:focus:border-white
                                            dark:focus:bg-white
                                            dark:focus:text-black
                                        '/>
                                    {/* HONEYPOT */}
                                    <input 
                                        type='text' 
                                        name='honeypot' 
                                        tabIndex={-1}
                                        autoComplete='off'
                                        className='hidden'
                                    />
                                    {/* SUBMIT */}
                                    <div className='mt-8 flex items-center justify-between'>
                                        <button 
                                            type='submit' 
                                            disabled={ contactFormStatus === "submitting" } 
                                            className='
                                                group
                                                inline-flex
                                                items-center
                                                border
                                                border-black
                                                px-4 py-2
                                                font-sora
                                                text-sm
                                                font-semibold
                                                transition-colors
                                                duration-300
                                                hover:bg-black
                                                hover:text-white
                                                dark:border-white
                                                dark:hover:bg-white
                                                dark:hover:text-black
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            '
                                        >
                                            <span
                                                aria-hidden="true"
                                                className='
                                                    mr-2
                                                    inline-block
                                                    -translate-x-2
                                                    opacity-0
                                                    transition-all
                                                    duration-300
                                                    group-hover:translate-x-0
                                                    group-hover:opacity-100
                                                '
                                            >
                                                [
                                            </span>
                                            <span>
                                                {contactFormStatus === "submitting" 
                                                    ? t("sending") 
                                                    : t("send")}
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className='
                                                    ml-2
                                                    inline-block
                                                    translate-x-2
                                                    opacity-0
                                                    transition-all
                                                    duration-300
                                                    group-hover:translate-x-0
                                                    group-hover:opacity-100
                                                '
                                            >
                                            ]
                                            </span>
                                        </button>
                                    </div>
                                    {contactFormStatus === "fail" && (
                                        <p className="font-jetbrains text-xs text-red-600">
                                            {t("tryAgain")}
                                        </p>
                                    )}
                                </form>
                            )}
                    </div>
                </div>
                {/* FOOTER */}
                <footer className='mt-auto border-t border-black pt-6 dark:border-white'>
                    <div className='flex flex-col justify-between gap-2 font-jetbrains text-xs tracking-wider sm:flex-row'>
                        <span>Brandon Cook</span>
                        <span>© {new Date().getFullYear()}</span>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default ContactForm;