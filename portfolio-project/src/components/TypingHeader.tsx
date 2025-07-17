'use client';

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const TypingHeader = () => {

    const [ showH1, setShowH1 ] = useState(false);
    const [ showH2, setShowH2 ] = useState(false);
    const [ showFinalH2, setShowFinalH2 ] = useState(false);

    useEffect(() => {
        const timer = [            
            setTimeout(() => setShowH1(true), 0),
            setTimeout(() => setShowH2(true), 1000),
            setTimeout(() => setShowFinalH2(true), 2000),
        ];
        return () => timer.forEach(clearTimeout);
    })

    return (
        <>
            <div className="space-y-4 p-4 w-100">
                <h1 className="text-4xl font-bold text-black dark:text-white">
                    {showH1 && 
                        <TypeAnimation
                            className="TypeAnimation" 
                            sequence={['Hello.', 1000]}
                            wrapper="span"
                            speed={40}
                    />}
                </h1>
                <h2 className="text-3xl font-medium text-black dark:text-white">
                    {showH2 &&
                        <TypeAnimation 
                            className="TypeAnimation"
                            sequence={[1000, 'My name is Brandon']}
                            wrapper="span"
                            speed={40}
                        />}
                </h2>
                <h2 className="text-3xl font-medium text-black dark:text-white">
                    {showFinalH2 &&
                        <TypeAnimation 
                            className=""
                            sequence={[1000, "I'm a Software Developer"]}
                            wrapper="span"
                            speed={40}
                        />}
                </h2>
            </div>
        </>
    )
}

export default TypingHeader