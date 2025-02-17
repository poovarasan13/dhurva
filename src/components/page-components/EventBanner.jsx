import React from 'react';

function EventBanner({
  venue,
  date,
  title,
  subtitle,
  description,
  buttonText,
  bgColor,
  textColor,
  highlightColor,
}) {
  return (
    <div
      className="relative py-16 text-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Highlight Circle */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full -mr-20 -mt-10"
        style={{ backgroundColor: highlightColor }}
      ></div>
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Subtitle */}
        <h2
          className="uppercase text-xl font-semibold tracking-wider mb-2"
          style={{ color: highlightColor }}
        >
          {subtitle}
        </h2>

        {/* Title */}
        <h1
          className="text-3xl lg:text-5xl font-bold mb-4"
          style={{
            color: textColor,
            fontFamily: 'Roboto, sans-serif !important', // Apply the font here
          }}
        >
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg mb-8" style={{ color: textColor }}>
          {description}
        </p>

        {/* Button */}
        <button
          className="font-bold py-3 px-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: highlightColor,
            color: textColor,
          }}
        >
          {buttonText}
        </button>

        {/* Venue and Date */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center" style={{ color: textColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">Venue: {venue}</span>
          </div>

          <div className="flex items-center" style={{ color: textColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">Date: {date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBanner;