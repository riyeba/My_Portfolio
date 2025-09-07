


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, images, githubLink, technologies, highlights, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200); // Stagger animations

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative mt-[30px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:-translate-y-2 overflow-hidden border border-gray-100`}
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
          {description}
        </p>
        
        {/* Key Highlights */}
        {highlights && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Images */}
        <div className="space-y-4 mb-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* GitHub Link */}
        <div className="pt-4 border-t border-gray-100">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 group"
          >
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

function MachineLearning() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Weapon Detection with Automatic Email Alert System",
      description: "An advanced computer vision system leveraging YOLOv8 for real-time weapon detection in security applications. The system provides automated threat identification with immediate email notifications, making it ideal for surveillance in public spaces, transportation hubs, and high-security environments.",
      technologies: ["YOLOv8", "Computer Vision", "Python", "Email Integration", "Real-time Processing"],
      highlights: [
        "Real-time weapon detection with high accuracy",
        "Automatic email alert system for immediate response",
        "Supports both video and image processing",
        "Scalable for various security applications"
      ],
      images: [
        { src: "/images/detected_image.png", alt: "Weapon detection in action" },
        { src: "/images/message_receivedd.png", alt: "Email alert notification" }
      ],
      githubLink: "https://github.com/riyeba/weapon-detection-alert-system"
    },
    {
      title: "Sleeping Student Monitoring System",
      description: "An intelligent classroom monitoring solution using MMACTION framework for automated detection of dozing students. The system analyzes video feeds to identify signs of sleepiness and provides timestamped logs for educational analytics and intervention.",
      technologies: ["MMACTION", "Video Analysis", "Action Recognition", "Python", "OpenCV"],
      highlights: [
        "Real-time student attention monitoring",
        "Timestamp logging for detailed analytics",
        "High-probability detection algorithms",
        "Adaptable for various learning environments"
      ],
      images: [
        { src: "/images/sleepingImage.jpg", alt: "Student monitoring interface" },
        { src: "/images/Results.PNG", alt: "Detection results and analytics" }
      ],
      githubLink: "https://github.com/riyeba/Class-Doze-Detector/tree/main"
    },
    {
      title: "Saudi Dates Fruit Classification System",
      description: "A comprehensive fruit classification solution specifically designed for Saudi date varieties. This full-stack application includes a TensorFlow-powered AI model, REST API backend, and user-friendly web interface for accurate identification of nine different date types.",
      technologies: ["TensorFlow", "Computer Vision", "Full-Stack Development", "API Development", "Image Classification"],
      highlights: [
        "Classifies 9 different Saudi date varieties",
        "Optimized model for fast deployment",
        "Complete web application with API",
        "Quality control solution for agriculture industry"
      ],
      images: [
        { src: "/images/Result_date.png", alt: "Date classification results" }
      ],
      githubLink: "https://github.com/riyeba/Saudi-Dates-Fruit-Vision"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className={`text-center transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI & Computer Vision Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions in artificial intelligence and computer vision, 
              from real-time security systems to agricultural applications
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="flex">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to work on innovative AI and computer vision projects. 
              Let's discuss how we can create impactful solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="taakinpennu@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <a
                href="https://linkedin.com/in/ptaiwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLearning;