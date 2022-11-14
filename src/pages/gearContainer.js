import React from "react";

import img from "../assets/img/profile-picture-2.png"

const GearContainer = () => {
    return (
        <>
            {/* CONTAINER */}
            <div className="container mx-auto p-10 2xl:w-5/12 xl:w-7/12 lg:w-9/12 md:w-11/12 sm:w-12/12 text-center rounded-lg ">
                {/* CONTAINER HEADER */}
                <div className="p-6">
                    <img src={img} className="w-40 rounded-full" alt="rifqi-maulana-profile-picture" />
                    <h1 className="text-left pt-6 text-6xl font-[rubik] font-bold">Rifqi Maulana</h1>
                </div>
                {/* END OF CONTAINER HEADER */}
                <hr />
                {/* CONTAINER ABOUT */}
                <div className="p-6">
                    <p className="text-left font-[rubik]">
                        Bunch of stuff that i usually use for my daily activites.
                    </p>
                </div>
                {/* END OF CONTAINER ABOUT */}
                <hr />
                {/* CONTAINER STUFF */}
                <div className="mt-2 p-6">
                    {/* STUFF ROW 1 */}
                    <div className="2xl:flex xl:block lg:block md:block sm:block mt-5 gap-10">
                        {/* STUFF 1 */}
                        <div className="container mx-auto p-5 shadow-lg overflow-hidden max-w-sm rounded-md ">
                            <img className="w-full" src="https://images.tokopedia.net/img/cache/700/product-1/2020/6/13/batch-upload/batch-upload_979b14c6-62a1-4031-a621-d33dcef92117.jpg" alt="sony-alpha-6000" />
                            <hr />
                            <div className="text-left pt-3">
                                <h1 className="font-bold text-xl mb-2">Sony Alpha 6000</h1>
                                <p className="text-gray-700 text-base">
                                    Compact, Mirrorless Camera.
                                </p>
                                <button className="mt-2 px-3 py-2 rounded-full text-gray-50  bg-blue-700 hover:bg-blue-900">
                                    <a href="https://www.tokopedia.com/barristore623/sony-alpha-a6000-mirrorless-digital-camera-with-16-50mm-lens-grey">Buy Now</a>
                                </button>
                            </div>
                        </div>
                        {/* END OF STUFF 1 */}
                        {/* STUFF 2 */}
                        <div className="container mx-auto p-5 shadow-lg overflow-hidden max-w-sm rounded-md ">
                            <img className="w-full" src="https://cdn.shopify.com/s/files/1/0554/2543/3657/products/SonyE50mmF1.8OSS_300x300.jpg?v=1636176471" alt="sony-alpha-6000" />
                            <hr />
                            <div className="text-left pt-3">
                                <h1 className="font-bold text-xl mb-2">Sony E f/1.8 50mm</h1>
                                <p className="text-gray-700 text-base">
                                    Great Fixed Lens for Bokeh Shots.
                                </p>
                                <button className="mt-2 px-3 py-2 rounded-full text-gray-50  bg-blue-700 hover:bg-blue-900">
                                    <a href="https://www.tokopedia.com/vog-shop/lensa-sony-e-50mm-f1-8-oss-lensa-sony-50mm-f1-8">Buy Now</a>
                                </button>
                            </div>
                        </div>
                        {/* END OF STUFF 2 */}
                    </div>
                    {/* END OF STUFF ROW 1 */}
                    {/* STUFF ROW 2 */}
                    <div className="2xl:flex xl:block lg:block md:block sm:block mt-5 gap-10">
                        {/* STUFF 3 */}
                        <div className="container mx-auto p-5 shadow-lg overflow-hidden max-w-sm rounded-md">
                            <img className="w-full" src="https://pondoklensa.com/files/photo/web/product/md/ef949e84be098f948a39046219b1b4038.jpg" alt="sony-alpha-6000" />
                            <hr />
                            <div className="text-left pt-3">
                                <h1 className="font-bold text-xl mb-2">Sony E f/4.0 18-105mm</h1>
                                <p className="text-gray-700 text-base">
                                    Current Favorite All-Around Lens.
                                </p>
                                <button className="mt-2 px-3 py-2 rounded-full text-gray-50  bg-blue-700 hover:bg-blue-900">
                                    <a href="https://www.tokopedia.com/blitzcam/sony-e-pz-18-105mm-f4-g-oss-lensa-sony-18-105mm-garansi-resmi">Buy Now</a>
                                </button>
                            </div>
                        </div>
                        {/* END OF STUFF 3 */}
                        {/* STUFF 4 */}
                        <div className="container mx-auto p-5 shadow-lg overflow-hidden max-w-sm rounded-md">
                            <img className="w-full" src="https://pondoklensa.com/files/photo/web/product/md/a669a7d8cb1d9b8bdfe68d7f82df260a49.jpg" alt="sony-alpha-6000" />
                            <hr />
                            <div className="text-left pt-3">
                                <h1 className="font-bold text-xl mb-2">Zhiyun Crane 2</h1>
                                <p className="text-gray-700 text-base">
                                    My Thor's Mjolnir.
                                </p>
                                <button className="mt-2 px-3 py-2 rounded-full text-gray-50  bg-blue-700 hover:bg-blue-900">
                                    <a href="https://www.tokopedia.com/bursakameraprof/zhiyun-tech-crane-2-3-axis-stabilizer-mechanical-follow-focus-kombinasi?extParam=ivf%3Dfalse%26src%3Dsearch">Buy Now</a>
                                </button>
                            </div>
                        </div>
                        {/* END OF STUFF 4 */}
                    </div>
                    {/* END OF STUFF ROW 2 */}
                    {/* STUFF ROW 3 */}
                    <div className="2xl:flex xl:block lg:block md:block sm:block mt-5 gap-10">
                        {/* STUFF 5 */}
                        <div className="container mx-auto p-5 shadow-lg overflow-hidden max-w-sm rounded-md">
                            <img className="w-full" src="https://m.media-amazon.com/images/I/41ssJcrLXUL._SX300_SY300_QL70_ML2_.jpg" alt="sony-alpha-6000" />
                            <hr />
                            <div className="text-left pt-3">
                                <h1 className="font-bold text-xl mb-2">Keychron K2</h1>
                                <p className="text-gray-700 text-base">
                                    Daily Wireless Mechanical Keyboard.
                                </p>
                                <button className="mt-2 px-3 py-2 rounded-full text-gray-50  bg-blue-700 hover:bg-blue-900">
                                    <a href="https://www.tokopedia.com/clover-gaming/keychron-k2-rgb-hotswap-aluminium-frame-wireless-mechanical-keyboard-white-black-blue-switch">Buy Now</a>
                                </button>
                            </div>
                        </div>
                        {/* END OF STUFF 5 */}
                        {/* STUFF 6 */}
                        <div className="container mx-auto p-5 shadow-lg overflow-hidden max-w-sm rounded-md">
                            <img className="w-full" src="https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2022/5/5/5fd31697-4ade-46b5-a001-b87831f64618.jpg" alt="sony-alpha-6000" />
                            <hr />
                            <div className="text-left pt-3">
                                <h1 className="font-bold text-xl mb-2">LG 24MK600M</h1>
                                <p className="text-gray-700 text-base">
                                    (i want to upgrade) My Monitor.
                                </p>
                                <button className="mt-2 px-3 py-2 rounded-full text-gray-50  bg-blue-700 hover:bg-blue-900">
                                    <a href="https://www.tokopedia.com/winskamera/lg-24mk600m-b-ati-23-8-monitor-ips-full-hd-borderless-amd-freesync?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true">Buy Now</a>
                                </button>
                            </div>
                        </div>
                        {/* END OF STUFF 6 */}
                    </div>
                    {/* END OF STUFF ROW 3 */}
                </div>
                {/* END OF CONTAINER STUFF */}
                <hr />
            </div>
            {/* END OF CONTAINER */}
        </>
    )
}
export default GearContainer