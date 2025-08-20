"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const ContactForm = () => {
    const [ contactFormStatus, setContactFormStatus ] = useState<string | null>(null);

    async function submitRequest(request:React.FormEvent<HTMLFormElement>) {
        request.preventDefault();

        const form = request.currentTarget;
        const formData = new FormData(form);

        if(formData.get("honeypot")) {
            console.log("test");
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
            });

            if(response.ok) {
                setContactFormStatus("success");
                form.reset();
            } else {
                setContactFormStatus("fail");
            }
        }
        catch(error) {
            console.log(error);
            setContactFormStatus("fail");
        }
    }
    return (
        <>
            {contactFormStatus === "success" ? (
                <p>Thanks!</p>
                ) : (
                    <div className="bg-white rounded-2xl m-2 font-bold">
                        <div>
                            <h1 className="font-bold p-4 text-center">Contact Me</h1>
                            <div className='flex justify-center'>
                                <Link href="https://github.com/Bcook2289" target='_blank'>
                                    <motion.div
                                        whileHover={{scale: 1.2}}
                                        whileTap={{scale: 0.9}}
                                        className='cursor-pointer mx-2'
                                    >
                                        <Image alt="link" src={"/svg-icons/github.svg"} width={40} height={40} className="bg-white object-cover rounded-full"/>
                                    </motion.div>
                                </Link>
                                <Link href="https://www.linkedin.com/in/bcook2289" target='_blank'>
                                    <motion.div
                                        whileHover={{scale: 1.2}}
                                        whileTap={{scale: 0.9}}
                                        className='cursor-pointer mx-2'>
                                            <Image alt="link" src={"/svg-icons/linkedin.svg"} width={40} height={40} className="bg-white rounded"/>
                                        </motion.div>
                                </Link>
                            </div>
                        </div>
                        <form onSubmit={submitRequest} className= "flex flex-col mt-4 mx-4">
                            <label htmlFor='email' className='font-medium py-2'>
                                Email Address
                            </label>
                            <input id='email' type='email' name='email' required className='p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'/>
                            <label htmlFor='message' className='font-medium py-2'>
                                Message
                            </label>
                            <textarea id='message' name='message' required rows={4} className='p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'/>
                            <input type='text' name='honeypot' style={{ display: "none" }}/>
                            <div className='flex justify-center'>
                                <button type='submit' disabled={contactFormStatus === "submitting"} className='px-4 py-2 my-4 w-full sm:w-40 rounded bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white transition-colors border duration-500 cursor-pointer'>
                                    {contactFormStatus === "submitting" ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {contactFormStatus === "error" && (
                    <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
                )}
        </>
    )
}

export default ContactForm;