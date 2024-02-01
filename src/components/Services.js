import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from '../images/country.jpeg';
import img2 from '../images/accomodation.jpg';
import img3 from '../images/cab.jpeg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12">
                    <div className="flex flex-col-reverse md:flex-row py-8 justify-between items-center md:text-center" data-aos="zoom-out">
                        <div className="md:w-1/2 flex flex-col md:mx-4 justify-center">
                            <h3 className="text-3xl text-gray-500 font-bold">Who <span className='font-black'>we are!</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Here we have a plan for your favorite tour in different places such as countryside tours, city tours. We also offer different services like Airport Pick up and Drop off. Just book in advance by contacting us through email or phone calls.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
                                <div>
                                <img src={img}  alt="Tour"  style={{ maxWidth: '70%', maxHeight: '60%' }} />
                                </div>
                                <div>
                                    <img src={img2}    alt="Hotel Booking" style={{ maxWidth: '70%', maxHeight: '60%' }} />
                                </div>
                                <div>
                                    <img src={img3}   alt="Transport" style={{ maxWidth: '70%', maxHeight: '60%' }} />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

 <section data-aos="zoom-in-down">
    <div className="my-4 py-4">
        <h2 className="my-2 text-center text-3xl text-gray-500 uppercase font-bold">what we do</h2>
        <div className='flex justify-center'>
            <div className='w-24 border-b-4 border-gray-500'></div>
        </div>
        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-500">We are deeply committed to the happiness and enjoy of our clients.</h2>
    </div>

    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5"> {/* Using 1 column on small screens, 3 columns on medium screens and above */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                    <h2 className="font-semibold my-4 text-2xl text-center">Tours and Safaris</h2>
                    <p className="text-md font-medium">
                        Visit Rwanda with Faustin Travels and Tour Ltd and be sure to have a memorable experience as we take you right in the middle of wildlife action. Our Rwanda safaris and wildlife tours are well and carefully curated to ensure that you have the most amazing experience in the land of a thousand hills, remarkable Rwanda.
                    </p>
                </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                    <h2 className="font-semibold my-4 text-2xl text-center">Hotel Booking</h2>
                    <p className="text-md font-medium">
                        Kigali mountain (Horse riding, Zipline, Fazenda), Genocide Memorial Museum, Campaign against genocide Museum, Kigali craft Market,
                    </p>
                </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                    <h2 className="font-semibold my-4 text-2xl text-center ">Transport</h2>
                    <p className="text-md font-medium">
                        We can pick you up and drop you off in case you contact us.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


            
        </div>
    );
}

export default Services;



