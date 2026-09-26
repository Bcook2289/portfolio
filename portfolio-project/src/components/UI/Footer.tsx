const Footer = () => {
    return (
        <footer className='mx-auto w-full max-w-6xl border-t border-black px-6 py-6 dark:border-white sm:px-10 lg:px-16'>
            <div className='flex flex-col justify-between gap-2 font-jetbrains text-xs tracking-wider sm:flex-row'>
                <span>Brandon Cook</span>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;