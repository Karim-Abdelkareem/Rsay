import React from "react";

export default function Logo({ scrolling }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`main-header logo ${
          scrolling ? "text-brand" : "text-white"
        } font-extrabold text-3xl lg:text-5xl flex relative items-center`}
        dir="ltr"
      >
        <span className="inline-block opacity-0 -translate-x-24 animate-show-hide-span delay-0">
          R
        </span>
        <span className="inline-block opacity-0 -translate-x-24 animate-show-hide-span delay-200">
          S
        </span>
        <span className="inline-block opacity-0 -translate-x-24 animate-show-hide-span delay-400">
          A
        </span>
        <span className="inline-block opacity-0 -translate-x-24 animate-show-hide-span delay-600">
          Y
        </span>
        <span
          className={`p-1.5 rounded-full border ${
            scrolling ? "border-brand" : "border-white"
          }  inline-block opacity-0 -translate-x-24 animate-show-hide-span delay-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M10 2a5 5 0 0 0-5 5v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7V7a3 3 0 0 1 5.906-.75a1 1 0 0 0 1.936-.5A5 5 0 0 0 10 2"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
