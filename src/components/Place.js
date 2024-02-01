import React from 'react';
import img1 from '../components/image1.jpeg';
import img2 from '../components/image2.jpeg';
import img3 from '../components/image5.jpeg';
// ... import images 4 to 12
import img4 from '../components/image2.jpeg';
import img5 from '../components/image4.jpeg';
import img6 from '../components/image4.jpeg';
import img7 from '../components/image7.jpeg';
import img8 from '../components/image8.jpeg';
import img9 from '../components/image9.jpeg';
import img10 from '../components/image10.jpeg';
import img11 from '../components/image10.jpeg';
import img12 from '../components/image12.jpeg';

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const places = () => {

    return (
        <div id="place" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-gray-700 uppercase font-bold">Collections</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* Display images */}
                        {imageArray.map((image, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={image} />
                                    <h2 className="font-semibold my-4 text-2xl text-center"> </h2>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* Rest of your code... */}
        </div>
    )
}

export default places;
