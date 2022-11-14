import React from "react";

import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <footer className="container mx-auto mb-20 w-96 rounded-t-lg lg:text-left">
                <div className="flex mx-auto text-gray-700 p-4 justify-center gap-10 opacity-50">
                    <a href="https://www.instagram.com/maruarchive">
                        <AiFillInstagram className="hover:text-gray-900" size={'2em'} />
                    </a>
                    <a href="https://www.linkedin.com/in/rifqi-maulana-541a88227/">
                        <AiFillLinkedin className="hover:text-gray-900" size={'2em'} />
                    </a>
                </div>
                <div className="mt-5 text-center text-gray-700/50 font-[rubik]">
                    © 2022 Copyright,
                    Rifqi Maulana
                </div>
            </footer>

        </>
    )
}
export default Footer