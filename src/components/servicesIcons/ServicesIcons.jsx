import React from "react";

export default function ServicesIcons() {
  return (
    <div className="text-white flex gap-4">
      {/* web */}
      <div>
        <div className="animate-pulse bg-brand rounded-full w-fit p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13.941"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth={4}
                d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M32 35h12m-6-6v12"
              ></path>
              <circle
                r={2}
                fill="currentColor"
                transform="matrix(0 -1 -1 0 10 14)"
              ></circle>
              <circle
                r={2}
                fill="currentColor"
                transform="matrix(0 -1 -1 0 16 14)"
              ></circle>
            </g>
          </svg>
        </div>
        {/* <p>ease</p> */}
      </div>
      {/* responsive */}
      <div>
        <div className="animate-pulse bg-brand rounded-full w-fit p-2 delay-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"
            ></path>
          </svg>
        </div>
        {/* <p>responsive</p> */}
      </div>
      {/* performance */}
      <div>
        <div className="animate-pulse bg-brand rounded-full w-fit p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 22.007H5v-2h10ZM22 4l-4.735 5.955l-.22.27l-5.63 7.19a2.001 2.001 0 1 1-2.83-2.83ZM2.645 7.234A10.84 10.84 0 0 0 1.19 15H2v-1a9.7 9.7 0 0 1 1.69-5.52ZM12 2a10.96 10.96 0 0 0-8.119 3.597L5.025 6.96A7.43 7.43 0 0 1 10 5a7.43 7.43 0 0 1 4.997 1.978l3.55-2.802A10.94 10.94 0 0 0 12 2m6.83 9.2l-.233.287l-.728.93A10 10 0 0 1 18 14v1h4.81a10.88 10.88 0 0 0-1.183-7.318Z"
            ></path>
          </svg>
        </div>
        {/* <p>performance</p> */}
      </div>
      {/* secure */}
      <div>
        <div className="animate-pulse bg-brand rounded-full w-fit p-2 delay-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            >
              <path d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"></path>
              <path d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"></path>
              <path d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"></path>
              <path d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"></path>
              <path d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"></path>
            </g>
          </svg>
        </div>
        {/* <p>security</p> */}
      </div>
    </div>
  );
}
