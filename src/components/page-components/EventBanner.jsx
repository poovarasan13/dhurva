import React from 'react';

function EventBanner({
  venue,
  date,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  bgColor,
  textColor,
  highlightColor,
}) {
  return (
    <div
      className="py-12 text-center relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Highlight Circle */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full -mr-20 -mt-10"
        style={{ backgroundColor: highlightColor }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <h2
          className="uppercase text-sm  font-semibold tracking-wider"
          style={{ color: highlightColor }}
        >
          {subtitle}
        </h2>
        <h1
          className="text-3xl lg:text-4xl font-bold mb-2"
          style={{ color: textColor }}
        >
          {title}
        </h1>
        <p className="mb-6" style={{ color: textColor }}>
          {description}
        </p>

        {/* Button */}
        <button
          className="font-bold py-2 px-8 rounded-full"
          style={{
            backgroundColor: highlightColor,
            color: textColor,
          }}
        >
          {buttonText}
        </button>

        {/* Venue and Date */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="flex items-center mr-4 last:mr-0" style={{ color: textColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            Venue: {venue}
          </div>
          <div className="flex items-center mt-2 md:mt-0 " style={{ color: textColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            Date: {date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBanner;
