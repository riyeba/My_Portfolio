import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize animation on component mount (replaces AOS)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

   const navigate = useNavigate();

  return (
    <div className="w-full p-5 min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Main container with padding and light background */}

      <div className="flex items-center min-h-screen">
        {/* Row to center-align the content */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="text-center md:text-left">
            {/* Left Column for text and buttons */}
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              Taiwo Akinpennu
            </h1>
            <p className={`text-lg mb-3 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              I am a Machine Learning and Computer Vision Engineer with over 3 years experience in developing AI solutions for real-time monitoring and recognition systems. Adept at deploying machine learning models and collaborating with cross-functional 
              teams to deliver cutting-edge AI solution. Eager to leverage expertise in AI engineering to drive 
              impactful results in any target role. 
            </p>
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              {/* Buttons for navigating to projects and about sections */}
              <div className="flex justify-center">
                <div className="mb-3 md:mb-0">
                  <button 
                    onClick={() => {
                      // In your real app, use: navigate('/mlearning') or Link component
                      // console.log('Navigate to /mlearning');
                      navigate("/mlearning")
                    }}
                    className="bg-purple-500 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg text-lg mr-3 transition-colors duration-200"
                  >
                    My Projects
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Right Column for Image */}
            <img
              src="/images/Photo.jpg"
              alt="Taiwo Akinpennu"
              className={`rounded-full shadow-lg mt-4 w-full h-auto max-w-xs transition-all duration-1000 delay-600 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              style={{ maxWidth: "300px" }} // Ensures image does not get too large on large screens
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;