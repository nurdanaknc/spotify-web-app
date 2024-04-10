const ShuffleIcon = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "56"}
      height={props.size || "56"}
      viewBox="0 0 56 56"
      fill="none"
    >
      <g clip-path="url(#clip0_4_3493)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.9506 41.8349C40.0184 41.8349 40.08 41.8775 40.1046 41.9555C40.1354 42.0263 40.1173 42.1114 40.068 42.168C39.5569 42.7562 38.5344 43.9324 38.5344 43.9324C37.8324 44.7402 37.8324 46.051 38.5344 46.8587C39.2364 47.6665 40.3696 47.6665 41.0715 46.8587C41.0715 46.8587 45.7327 41.502 46.9703 40.0707C47.0504 39.9786 47.0935 39.851 47.0935 39.7235C47.0935 39.5959 47.0504 39.4683 46.9703 39.3762C45.7327 37.9449 41.0715 32.5881 41.0715 32.5881C40.3696 31.7803 39.2364 31.7803 38.5344 32.5881C37.8324 33.3958 37.8324 34.7067 38.5344 35.5145C38.5344 35.5145 39.6121 36.7545 40.1416 37.3639C40.1909 37.4205 40.2095 37.5056 40.1787 37.5764C40.154 37.6544 40.0925 37.697 40.0247 37.697C39.0888 37.697 36.8968 37.6898 36.8968 37.6898C36.0717 37.6898 35.2462 37.2292 34.378 36.5561C33.2758 35.6916 32.1613 34.473 31.0283 33.0558C31.0283 33.0558 30.3634 32.2267 30.0186 31.7945C29.9632 31.7236 29.8893 31.6812 29.8031 31.6812C29.723 31.6741 29.643 31.7094 29.5875 31.7732C29.0888 32.3046 27.8941 33.5659 27.3953 34.0974C27.3337 34.1611 27.2967 34.2462 27.2967 34.3383C27.2905 34.4304 27.3216 34.5225 27.377 34.5934C27.7219 35.0256 28.3868 35.8547 28.3868 35.8547C31.2747 39.4613 34.2182 41.8208 36.8906 41.8208C36.8906 41.8208 39.0332 41.8278 39.9506 41.8349ZM40.068 14.888C40.1173 14.9447 40.1354 15.0226 40.1046 15.1006C40.08 15.1714 40.0184 15.221 39.9506 15.221C39.0332 15.221 36.8906 15.228 36.8906 15.228C35.0125 15.228 33.0114 16.3264 31.0163 18.2537C28.5101 20.677 25.9112 24.4537 23.325 28.2446C20.8989 31.7874 18.4917 35.3515 16.1456 37.6189C14.9079 38.8164 13.7438 39.681 12.58 39.681C12.58 39.681 10.6588 39.681 9.90139 39.681C9.72897 39.681 9.59351 39.8368 9.59351 40.0281C9.59351 40.8146 9.59351 42.6782 9.59351 43.4576C9.59351 43.5568 9.62468 43.6418 9.6801 43.7126C9.74167 43.7764 9.81518 43.8119 9.90139 43.8119C10.4125 43.8119 11.3917 43.8119 11.3917 43.8119H12.58C14.4642 43.8119 16.4597 42.7207 18.4547 40.7863C20.9609 38.363 23.5594 34.5863 26.1518 30.7954C28.5717 27.2526 30.9851 23.6884 33.3312 21.421C34.5689 20.2235 35.7268 19.359 36.8906 19.359H36.8968C36.8968 19.359 39.0888 19.352 40.0247 19.352C40.0925 19.352 40.154 19.4015 40.1787 19.4724C40.2095 19.5432 40.1909 19.6283 40.1416 19.685C39.6121 20.3014 38.5344 21.5415 38.5344 21.5415C37.8324 22.3493 37.8324 23.653 38.5344 24.4608C39.2364 25.2685 40.3696 25.2685 41.0715 24.4608C41.0715 24.4608 45.7327 19.1039 46.9703 17.6726C47.0504 17.5805 47.0935 17.4601 47.0935 17.3255C47.0935 17.198 47.0504 17.0704 46.9703 16.9783C45.7327 15.554 41.0715 10.1901 41.0715 10.1901C40.3696 9.3894 39.2364 9.3894 38.5344 10.1901C37.8324 10.9979 37.8324 12.3088 38.5344 13.1165C38.5344 13.1165 39.5569 14.2928 40.068 14.888ZM11.3917 17.375H12.58C13.6144 17.375 14.6492 18.0694 15.7391 19.0543C17.1184 20.2943 18.5163 22.0233 19.9326 23.9507C19.9326 23.9507 20.5603 24.808 20.8928 25.2615C20.942 25.3324 21.0225 25.3748 21.1025 25.3819C21.1826 25.3961 21.2622 25.3607 21.3238 25.304C21.841 24.8009 23.0787 23.5963 23.6021 23.0932C23.6637 23.0294 23.7008 22.9445 23.707 22.8524C23.7132 22.7603 23.6884 22.668 23.6392 22.5972C23.3067 22.1437 22.6727 21.2863 22.6727 21.2863C20.7454 18.6575 18.824 16.383 16.9644 14.973C15.4804 13.8463 14.0024 13.2369 12.58 13.2369H9.59351V17.375H11.3917Z"
          fill={props.color || "#fff"}
          fill-opacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_3493">
          <rect width="56" height="56" rx="28" fill={props.color || "#fff"} />
        </clipPath>
      </defs>
    </svg>
  </>
);

export default ShuffleIcon;
