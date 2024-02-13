import React from "react";

const Valorant = (props) => {
  return (
    <>
      <svg
        className={props.className}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="15.999" r="16" fill="#FF4655"></circle>
        <path
          d="M25.228 16.203V9.11502C25.226 9.05102 25.174 8.99902 25.11 8.99902C25.073 8.99902 25.041 9.01602 25.019 9.04102L17.275 18.716C17.258 18.736 17.248 18.762 17.248 18.79C17.248 18.855 17.3 18.907 17.365 18.907H22.959C23.115 18.907 23.253 18.832 23.341 18.717L23.342 18.716L25.11 16.511C25.183 16.429 25.229 16.32 25.229 16.201L25.228 16.203ZM7.116 16.522L12.929 23.792C13.019 23.904 13.156 23.974 13.31 23.974C13.314 23.974 13.318 23.974 13.322 23.974H18.915C18.917 23.974 18.919 23.974 18.922 23.974C18.983 23.974 19.033 23.924 19.033 23.863C19.033 23.836 19.023 23.81 19.007 23.791L7.209 9.05002C7.187 9.02402 7.154 9.00702 7.118 9.00702C7.054 9.00702 7.001 9.05802 7 9.12202V16.21C7.008 16.328 7.052 16.435 7.119 16.521L7.118 16.52L7.116 16.522Z"
          fill="white"
        ></path>
      </svg>
    </>
  );
};

export default Valorant;