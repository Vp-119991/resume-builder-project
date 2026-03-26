import React from "react";

export const Title = ({ title, description }) => {
  return (
    <div className="mt-6 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-gray-600">
        {description}
      </p>
    </div>
  );
};
