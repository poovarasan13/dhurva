import React from "react";

const EventCard = ({ title, image}) => {
  return (
    <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 bg-black group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white dm-serif text-xl font-medium transform transition-transform duration-300 group-hover:translate-y-[-4px]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EventCard;