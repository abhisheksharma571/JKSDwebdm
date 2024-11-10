import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faDollarSign, faSearch, faThumbsUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="mb-5">
      <h1 className="mt-5 md:mt-0 text-4xl md:text-5xl text-[#08528e] font-bold text-center font-philosopher">
        Services We Provide
      </h1>

      {/* Web Development */}
      <div className="flex flex-col-reverse mt-5 md:mt-10 md:flex-row items-center justify-center">
        {/* Image */}
        <div className="w-[300px] md:w-[400px] flex justify-center">
          <img className="rounded-lg" src="./images/webdev.png" alt="Web Development" />
        </div>

        {/* Content */}
        <div className="w-[100%] md:w-[800px] text-center md:text-left px-5 md:px-0 mb-7 ml-0 md:ml-6">
          <p className="text-2xl md:text-3xl font-semibold">Most Affordable Web Development Services</p>
          <p className="mt-5 text-base md:text-lg">
            We specialize in creating custom, responsive websites tailored to meet the unique needs of your business. Our services include
            everything from designing user-friendly interfaces to building scalable, secure web applications. With a focus on functionality
            and aesthetics, we ensure that your website not only looks great but also performs seamlessly across all devices. Whether you're
            launching a new site or revamping an existing one, our expert team delivers a digital experience that enhances your brand's
            presence and drives engagement.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start font-bold">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPaintBrush} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Specialized Web Design</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Affordable Price</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Link to="/webdev">
              <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
                Explore More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="flex flex-col mt-5 md:flex-row items-center justify-center">
        {/* Content */}
        <div className="w-[100%] md:w-[800px] text-center md:text-left px-5 md:px-0 mb-7">
          <p className="mt-10 md:mt-1 text-2xl md:text-3xl font-semibold">Cost-Effective Digital Marketing Solutions</p>
          <p className="mt-5 text-base md:text-lg">
            Our digital marketing services are designed to help businesses thrive in the competitive online landscape. We offer a full
            suite of services including SEO, social media marketing, pay-per-click advertising (PPC), email marketing, and content marketing.
            Our expert team develops data-driven strategies to enhance brand visibility, drive traffic, and increase conversions. We leverage
            advanced analytics to continually optimize campaigns and maximize ROI. Whether you’re looking to build brand awareness, engage
            your audience, or drive sales, our digital marketing solutions are customized to meet your unique goals and deliver measurable
            results across digital platforms.
          </p>
          <div className="mt-7 flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start font-bold">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSearch} className="text-[#ffa75c] text-2xl mr-3" />
              <p>SEO Optimization</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faThumbsUp} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Social Media Marketing</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Link to="/digitalmarketing">
              <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
                Explore More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-[300px] md:w-[400px] flex justify-center">
          <img className="rounded-lg" src="./images/dig-marketing.png" alt="Digital Marketing" />
        </div>
      </div>
    </div>
  );
}

export default Services;
