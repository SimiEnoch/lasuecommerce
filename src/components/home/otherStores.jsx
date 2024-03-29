import React from 'react';
import { useNavigate } from 'react-router-dom';

const OtherStores = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/shop/all-products');
  };

  return (
    <div className="bg-[#FCF8F3]  w-screen">
      <div
        className="w-full sm:h-[180vh] h-[180vh] md:h-[100vh] py-10 relative"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <section
            id="home"
            className="mt-[70px] px-8 md:px-8 md:text-left py-6 text-center grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center justify-center"
          >
            <div className="mt-5">
              <h2 className="text-[2.7rem] font-black font-[Calibri] leading-[3rem]">
                Explore more products from our prestigious school{' '}
                <br /> With All You Need{' '}
              </h2>
              <p>
                Our customers are very impressed with this series of
                products,
                <br /> do well to check them out!
              </p>
              <div className="py-5">
                <button
                  className="bg-[#B88E2F] p-3 px-10 text-white text-md font-bold tracking-wider"
                  onClick={handleExplore}
                >
                  Explore More
                </button>{' '}
              </div>
            </div>
            {/* <div className="flex items-center justify-center"></div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default OtherStores;
