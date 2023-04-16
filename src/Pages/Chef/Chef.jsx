import React from 'react';
import cook from '../../assets/chief_1.jpg';
import chef from '../../assets/kokoro-1.jpg';
import chef1 from '../../assets/kokoro-2.jpg';
import chef2 from '../../assets/kokoro-3.jpg';
import chef3 from '../../assets/kokoro-4.jpg';

const Chef = () => {
    return (
        <div>
            <div className='md:grid grid-cols-3 gap-10 w-11/12 mx-auto my-5'>
                <div>
                    <img className='rounded-md' src={cook} alt="" />
                </div>
                <div className='col-span-2 mt-5'>
                    <h3 className='text-center font-bold text-3xl mb-5 Kurale'>Chef of sushi mol</h3>
                    <p>The chefs and staff at <span className='text-red-500'>Kokoro Sushi Mol</span> are always there for you, let us surprise you with our delicious range of freshly prepared sushi and sashimi, we are delighted to welcome you as a customer!</p>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-center font-bold capitalize text-2xl Kurale'>Our sushi Mol Gallery</h3>
                <div className='mt-7 md:grid grid-cols-4 gap-5 md:px-8 md:mb-12 mb-5'>
                    <img className='h-60 w-full shadow-lg rounded-md shadow-slate-400' src={chef} alt="" />
                    <img className='h-60 w-full shadow-lg rounded-md shadow-slate-400' src={chef1} alt="" />
                    <img className='h-60 w-full shadow-lg rounded-md shadow-slate-400' src={chef2} alt="" />
                    <img className='h-60 w-full shadow-lg rounded-md shadow-slate-400' src={chef3} alt="" />
                </div>
            </div>
            {/* <div className="mt-10 border-t-8 border-red-500 bg-black">
                <div className="md:grid grid-cols-2 ">
                    <div>
                        <h3 className="text-white font-bold text-center text-2xl mt-5">OPENING HOUR</h3>
                        <h5 className="text-center text-white mt-5 font-semibold">We zijn ook open <br />
                            of feestdagen</h5>
                        <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>Monday</h6>
                            <h6>14:00</h6>
                            <h6>-</h6>
                            <h6>22:00</h6>
                        </div>
                        <div className="bg-white w-10/12 mx-auto text-red-500 flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>TUESDAY</h6>

                            <h6>CLOSED</h6>
                        </div>
                        <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>Monday</h6>
                            <h6>14:00</h6>
                            <h6>-</h6>
                            <h6>22:00</h6>
                        </div>
                        <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>Monday</h6>
                            <h6>14:00</h6>
                            <h6>-</h6>
                            <h6>22:00</h6>
                        </div>
                        <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>Monday</h6>
                            <h6>14:00</h6>
                            <h6>-</h6>
                            <h6>22:00</h6>
                        </div>
                        <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>Monday</h6>
                            <h6>14:00</h6>
                            <h6>-</h6>
                            <h6>22:00</h6>
                        </div>
                        <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
                            <h6>Monday</h6>
                            <h6>14:00</h6>
                            <h6>-</h6>
                            <h6>22:00</h6>
                        </div>
                    </div>
                    <div className="text-white">
                        <h1 className="mt-5 text-center font-bold text-2xl">CONTACT INFORMATION</h1>
                        <p className="mt-5 font-semibold text-xl text-center">CORBIESTRAAT 21 <br />
                            2400 MOL, BELGIUM <br />
                            PHONE:+32 14 872 578 , 014872578</p>
                    </div>
                </div>
                <h1 className="text-center text-2xl font-bold mt-8 text-white">ORDER SUSHI MOL, GEEL, LOMMEL, BALEN, DESSEL, KASTERLEE, MEERHOUT</h1>
                <p className="text-center font-semibold text-white mt-5 md:w-11/12 mx-auto text-xl">As you enter our restaurant, you can see our chefs in action in the open kitchen. We carefully select all our staff members based on their outstanding abilities, Character, and personal qualities. From the waiter to the Chef, they will offer you the best possible sushi experience. KokoroSushi is one of Mol's top sushi restaurants. All our dishes are carefully prepared with high-quality products. Our highest priority is to provide you with the best possible dining experience. That is why we prepare all our dishes fresh and low in calories: that is how the favors come to dishes.</p>
                <p className="text-center font-semibold text-white mt-5 md:w-11/12 mx-auto text-xl">We welcome both young and old in our tastefully decorated, sleekly styled eatery, while foodies and guests who wish to experience japanese suchi for the very first time will feel completely at japan. Don't know what to choose from our menu? Let us help you </p>
                <h1 className="text-center text-2xl font-bold mt-10 text-white">RESTAURANT CORBIESTRAAT MOL</h1>
                <div className="flex mt-3 pb-10 justify-center items-center">
                    <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
                    <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
                    <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={takeway} alt="" /></a>
                    <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={uber} alt="" /></a>
                </div>
            </div> */}
        </div>
    );
};

export default Chef;