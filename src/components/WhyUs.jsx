import React from "react";

export default function WhyUs() {
  const points = [
    { boldText: "Corporate Team Outings" },
    { boldText: "College Trips" },
    { boldText: "Family Tours" },
    { boldText: "Industrial Visits" },
    { boldText: "Devotional Trips" },
  ];

  return (
    <div className="px-60 py-5">
      <div className="mx-auto px-40 sm:container">
        <div className="border-b border-stroke dark:border-dark-3">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
            What we offer
          </h2>
          {/* <p className="mb-6 text-sm font-medium text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices lectus sem.
          </p> */}
        </div>
      </div>
      <div className="pt-5">
        <ul className="flex flex-wrap pl-50 pr-30 boldText-left boldText-gray-500 dark:boldText-gray-400">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 rtl:space-x-reverse w-1/2 mb-4"
            >
              {/* <svg
            className="shrink-0 w-3.5 h-3.5 boldText-green-500 dark:boldText-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg> */}
              <span>
                {/* {point.boldText} */}
                <i class="fa-brands fa-slack"></i>
                {point.boldText && (
                  <span className="font-semibold boldText-gray-900 dark:boldText-white">
                    ‎ {point.boldText}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
