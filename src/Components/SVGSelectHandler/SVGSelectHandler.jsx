import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const SVGSelectHandler = ({ id }) => {
  switch (id) {
    case "logo":
      return (
        <svg
          width="39"
          height="56"
          viewBox="0 0 39 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85059 42.0684H19.2909H36.7312"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M5.79102 48.5L19.291 48.5L32.791 48.5"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M18.791 1.50002L18.791 8.50002L18.791 15.5"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M18.8657 14.7842V41.2158"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M29.9254 4.55275L18.8657 15.637"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M34.1792 8.81593L18.8657 24.1633"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M36.7314 15.6367L18.8657 32.6894"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M37.5821 23.3106L18.8657 42.0685"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M37.582 31.8369L27.373 42.0685"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M1 31.8369L11.209 42.0685"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M8.65674 4.55275L18.8657 15.637"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M4 9L18.4627 24.3474"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M1.85059 14.7842L18.8655 32.6895"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M1 22.458L18.8657 41.2159"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M19.291 54.8579C9.19019 54.8579 1 46.4056 1 35.9772V20.0228C1 9.5963 9.19019 1.14211 19.291 1.14211C29.3937 1.14211 37.5821 9.5963 37.5821 20.0228V35.9772C37.5839 46.4056 29.3937 54.8579 19.291 54.8579Z"
            stroke="#7EB693"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          width="27"
          height="24"
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5689 23.0001C12.2439 23.0001 12.7911 22.4529 12.7911 21.7779C12.7911 21.1029 12.2439 20.5557 11.5689 20.5557C10.8939 20.5557 10.3467 21.1029 10.3467 21.7779C10.3467 22.4529 10.8939 23.0001 11.5689 23.0001Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1246 23.0001C20.7996 23.0001 21.3468 22.4529 21.3468 21.7779C21.3468 21.1029 20.7996 20.5557 20.1246 20.5557C19.4496 20.5557 18.9023 21.1029 18.9023 21.7779C18.9023 22.4529 19.4496 23.0001 20.1246 23.0001Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.79102 1H5.57291L8.40933 17.0731H23.5369"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.90221 13.1837L23.1494 13.2907C23.2587 13.2908 23.3647 13.2529 23.4493 13.1837C23.5339 13.1144 23.5918 13.0179 23.6133 12.9107L25.3151 4.40145C25.3289 4.33283 25.3272 4.26203 25.3102 4.19414C25.2933 4.12625 25.2615 4.06297 25.2171 4.00886C25.1727 3.95476 25.1169 3.91118 25.0536 3.88128C24.9903 3.85138 24.9212 3.83589 24.8513 3.83594L6.35838 3.83594"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow-left":
      return <BsFillArrowRightCircleFill color="#335B6B" size={19} />;
    default:
      return null;
  }
};

