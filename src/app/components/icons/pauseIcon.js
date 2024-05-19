const PauseIcon = (props) => (
    <>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "56"}
    height={props.size || "56"}
    viewBox="0 0 56 56"
    fill="none"
  >
    <g clip-path="url(#clip0_4_3471)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 8.11904C38.349 8.11904 46.75 16.6045 46.75 27.0564C46.75 37.5086 38.349 45.994 28 45.994C17.651 45.994 9.25 37.5086 9.25 27.0564C9.25 16.6045 17.651 8.11904 28 8.11904ZM25.8084 19.4861C25.8084 19.065 25.4432 18.7228 25.0475 18.7228H21.8819C21.4558 18.7228 21.1209 19.065 21.1209 19.4861V34.5338C21.1209 34.9553 21.4558 35.2974 21.8819 35.2974H25.0475C25.4432 35.2974 25.8084 34.9553 25.8084 34.5338V19.4861ZM35.1834 19.4861C35.1834 19.065 34.8486 18.7228 34.4225 18.7228H31.2569C30.8308 18.7228 30.4959 19.065 30.4959 19.4861V34.5338C30.4959 34.9553 30.8308 35.2974 31.2569 35.2974H34.4225C34.8486 35.2974 35.1834 34.9553 35.1834 34.5338V19.4861Z"
        fill={props.color || "#fff"}

      />
    </g>
    <defs>
      <clipPath id="clip0_4_3471">
        <rect width="56" height="56" rx="28" fill={props.color || "#fff"} />
      </clipPath>
    </defs>
  </svg>
  </>
);

export default PauseIcon;
