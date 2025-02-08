import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-6">
        <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-12 animate-pulse">
          {/* Back Button */}
          <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>

          {/* Title */}
          <div className="h-10 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6"></div>

          {/* Severity Badge */}
          <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6"></div>

          {/* Brief Description */}
          <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
          <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6"></div>

          {/* Symptoms Section */}
          <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="h-10 bg-gray-300 dark:bg-gray-700 rounded"
                ></div>
              ))}
          </div>

          {/* Recommended Doctors Section */}
          <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mt-8 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array(2)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="h-10 bg-gray-300 dark:bg-gray-700 rounded"
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
