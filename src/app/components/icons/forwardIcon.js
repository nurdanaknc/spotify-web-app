const ForwardIcon = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "56"}
      height={props.size || "56"}
      viewBox="0 0 56 56"
      fill="none"
      transform="rotate(180)"
    >
      <g clip-path="url(#clip0_4_3485)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.8151 29.9129L16.8151 44.5172C16.8151 45.24 16.2586 45.8273 15.4932 45.8273L10.0665 45.8273C9.3708 45.8273 8.81421 45.24 8.81421 44.5172L8.81421 9.26169C8.81421 8.53885 9.3708 7.95231 10.0665 7.95231L15.4932 7.95231C16.2586 7.95231 16.8151 8.53885 16.8151 9.26169L16.8151 23.866L43.253 8.44754C43.8791 8.08437 44.6445 8.08437 45.2706 8.44754C45.8968 8.81072 46.3142 9.48154 46.3142 10.2079C46.3142 17.8564 46.3142 35.9225 46.3142 43.5717C46.3142 44.2973 45.8968 44.9682 45.2706 45.3313C44.6445 45.6945 43.8791 45.6946 43.253 45.3321L16.8151 29.9129Z"
          fill={props.color || "#fff"}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_3485">
          <rect width="56" height="56" rx="28" fill={props.color || "#fff"} />
        </clipPath>
      </defs>
    </svg>
  </>
);

export default ForwardIcon;
