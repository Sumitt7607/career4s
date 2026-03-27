import React from "react";
import InfoNeetCoun from "./InfoNeetCoun";
const colleges = [
  {
    name: "SRM University",
    image: "https://lh5.googleusercontent.com/p/AF1QipNAFxvIkpGFOCVe9CtDnXSmsmJzg2f340zK1M2C=w1080-k-no",
  },
  {
    name: "Shiv Nadar University",
    image: "https://www.inidesignstudio.com/wp-content/uploads/2020/11/IMG_4357-1-scaled-e1643210511898.jpg",
  },
  {
    name: "Amrita University",
    image: "https://webfiles.amrita.edu/2022/03/nbElb5oz-amrita-amaravati-campus-banner-2022.jpg",
  },
  {
    name: "IPU University",
    image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/170110014313_ipu.webp",
  },
];

const WHATSAPP_NUMBER = "919910992965";

const HomePageClg = () => {
  const handleEnquiry = (collegeName: string) => {
    const message = `Hello, I want enquiry about ${collegeName}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* TOP SECTION */}
      <div className="bg-orange-50 p-6 pb-2">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
          Top Universities
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-orange-200"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {college.name}
                </h2>

                <button
                  onClick={() => handleEnquiry(college.name)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Get Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 BIG ANIMATED STATS SECTION */}
      <div className="bg-gray-100 py-14 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          
          <div className="bg-white p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-5xl font-extrabold text-orange-500 animate-pulse">
              5000+
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-medium">
              Students Guided
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-5xl font-extrabold text-orange-500 animate-pulse">
              500+
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-medium">
              Partner Colleges
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-5xl font-extrabold text-orange-500 animate-pulse">
              5+
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-medium">
              Branches
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-5xl font-extrabold text-orange-500 animate-pulse">
              30+
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-medium">
              Expert Counselors
            </p>
          </div>

        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      {/* <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </a> */}

      <InfoNeetCoun/>
    </>
  );
};

export default HomePageClg;