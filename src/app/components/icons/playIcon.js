const PlayIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width= {props.size || "38"} 
    height= {props.size || "38"}
    viewBox="0 0 38 38"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.75 37.87C29.1053 37.87 37.5 29.3925 37.5 18.935C37.5 8.47749 29.1053 0 18.75 0C8.39466 0 0 8.47749 0 18.935C0 29.3925 8.39466 37.87 18.75 37.87ZM26.8204 20.5355C27.9398 19.8639 27.9398 18.2417 26.8204 17.57L14.6188 10.2491C13.4663 9.55757 12 10.3878 12 11.7318V26.3738C12 27.7178 13.4663 28.548 14.6188 27.8565L26.8204 20.5355Z"
      fill="#D9D9D9"
    />
  </svg>
);
export default PlayIcon;
