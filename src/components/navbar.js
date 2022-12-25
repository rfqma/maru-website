import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="container mx-auto px-2 py-2.5 flex items-center border-gray-800 opacity-70">
                <div className="flex items-center mx-auto">
                    <span className="font-small font-[rubik] whitespace-nowrap">
                        <a className="font-semibold text-gray-800 hover:text-blue-600" href="/">Home</a>
                        <a className="mx-10 font-semibold text-gray-800 hover:text-blue-600" href="https://drive.google.com/file/d/1uq70IlEy_edh5E4y6HGeZ4wF4VF2zkmB/view?usp=share_link">Curriculum Vitae</a>
                        <a className="font-semibold text-gray-800 hover:text-blue-600" href="/gear">Gear</a>
                    </span>
                </div>
            </nav>
        </>
    )
}
export default Navbar