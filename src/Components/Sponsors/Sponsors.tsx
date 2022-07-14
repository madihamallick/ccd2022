import Title from '../Title/Title'

const Sponsors = () => {
  return (
    <div className="w-3/4 my-0 mx-auto">
      <Title heading="Sponsors" />
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-x-20 md:space-y-0 justify-between grid-flow-row place-items-center p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 370 64"
        >
          <path
            fill="#4285f4"
            d="M19.58,47.48c-9.87,0-18.17-8.04-18.17-17.91c0-9.87,8.3-17.91,18.17-17.91c5.46,0,9.35,2.14,12.27,4.94  l-3.45,3.45c-2.1-1.97-4.93-3.49-8.82-3.49c-7.21,0-12.84,5.81-12.84,13.02c0,7.21,5.64,13.02,12.84,13.02  c4.67,0,7.34-1.88,9.04-3.58c1.4-1.4,2.32-3.41,2.66-6.16H19.58v-4.89h16.47c0.18,0.87,0.26,1.92,0.26,3.06  c0,3.67-1.01,8.21-4.24,11.44C28.93,45.73,24.91,47.48,19.58,47.48z"
          />
          <path
            fill="#ea4335"
            d="M61.78,35.95c0,6.64-5.1,11.53-11.36,11.53s-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53  S61.78,29.27,61.78,35.95z M56.8,35.95c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99  C53.84,42.94,56.8,40.06,56.8,35.95z"
          />
          <path
            fill="#fbbc04"
            d="M87.25,35.95c0,6.64-5.1,11.53-11.36,11.53c-6.26,0-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53  C82.15,24.42,87.25,29.27,87.25,35.95z M82.28,35.95c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99  c0,4.11,2.96,6.99,6.39,6.99C79.32,42.94,82.28,40.06,82.28,35.95z"
          />
          <path
            fill="#4285f4"
            d="M112.09,25.12v20.7c0,8.52-5.02,12.01-10.96,12.01c-5.59,0-8.95-3.76-10.22-6.81l4.41-1.83  c0.79,1.88,2.71,4.1,5.81,4.1c3.8,0,6.16-2.36,6.16-6.77v-1.66h-0.18c-1.14,1.4-3.32,2.62-6.07,2.62c-5.76,0-11.05-5.02-11.05-11.49  c0-6.51,5.28-11.57,11.05-11.57c2.75,0,4.93,1.22,6.07,2.58h0.18v-1.88H112.09z M107.64,35.99c0-4.06-2.71-7.03-6.16-7.03  c-3.49,0-6.42,2.97-6.42,7.03c0,4.02,2.93,6.94,6.42,6.94C104.93,42.94,107.64,40.01,107.64,35.99z"
          />
          <rect x="115.9" y="12.89" fill="#34a853" width="5.07" height="33.89" />
          <path
            fill="#ea4335"
            d="M140.89,39.75l3.93,2.62c-1.27,1.88-4.32,5.11-9.61,5.11c-6.55,0-11.28-5.07-11.28-11.53  c0-6.86,4.77-11.53,10.71-11.53c5.98,0,8.91,4.76,9.87,7.34l0.52,1.31l-15.42,6.38c1.18,2.31,3.01,3.49,5.59,3.49  C137.79,42.94,139.58,41.67,140.89,39.75z M128.79,35.6l10.31-4.28c-0.57-1.44-2.27-2.45-4.28-2.45  C132.24,28.88,128.66,31.15,128.79,35.6z"
          />
          <path
            fill="#5f6368"
            d="M157.63,46.78V15.14h9.68c4.86,0,8.75,1.47,11.67,4.4c2.92,2.93,4.38,6.74,4.38,11.43  c0,4.69-1.46,8.49-4.38,11.43c-2.92,2.93-6.81,4.4-11.67,4.4H157.63z M161.7,42.89h5.61c3.65,0,6.55-1.05,8.69-3.14  c2.14-2.09,3.21-5.02,3.21-8.8c0-3.74-1.07-6.67-3.21-8.77c-2.14-2.11-5.03-3.16-8.69-3.16h-5.61V42.89z M197.23,47.49  c-3.27,0-5.93-1.09-7.98-3.27c-2.05-2.18-3.07-4.94-3.07-8.26c0-3.15,0.99-5.86,2.98-8.13c1.99-2.27,4.53-3.4,7.62-3.4  c3.21,0,5.78,1.05,7.71,3.14c1.93,2.09,2.9,4.89,2.9,8.4l-0.05,0.75h-17.11c0.12,2.18,0.85,3.91,2.19,5.17  c1.34,1.27,2.91,1.9,4.71,1.9c2.92,0,4.89-1.24,5.92-3.71l3.62,1.5c-0.71,1.68-1.87,3.09-3.49,4.22  C201.58,46.92,199.59,47.49,197.23,47.49z M203.06,33.35c-0.09-1.24-0.66-2.42-1.7-3.54c-1.05-1.12-2.6-1.68-4.66-1.68  c-1.5,0-2.81,0.47-3.91,1.41c-1.11,0.94-1.87,2.21-2.28,3.8H203.06z M216.54,46.78l-8.75-21.66h4.42l6.36,16.79h0.09l6.45-16.79  h4.33l-8.84,21.66H216.54z M240.83,47.49c-3.27,0-5.93-1.09-7.98-3.27c-2.05-2.18-3.07-4.94-3.07-8.26c0-3.15,0.99-5.86,2.98-8.13  c1.99-2.27,4.53-3.4,7.62-3.4c3.21,0,5.78,1.05,7.71,3.14c1.93,2.09,2.89,4.89,2.89,8.4l-0.04,0.75h-17.11  c0.12,2.18,0.85,3.91,2.19,5.17c1.34,1.27,2.91,1.9,4.71,1.9c2.92,0,4.89-1.24,5.92-3.71l3.62,1.5c-0.71,1.68-1.87,3.09-3.49,4.22  C245.18,46.92,243.19,47.49,240.83,47.49z M246.66,33.35c-0.09-1.24-0.66-2.42-1.7-3.54c-1.05-1.12-2.6-1.68-4.66-1.68  c-1.5,0-2.81,0.47-3.91,1.41c-1.11,0.94-1.86,2.21-2.28,3.8H246.66z M258.52,46.78h-4.06V15.14h4.06V46.78z M265.16,27.71  c2.09-2.19,4.76-3.29,8-3.29c3.24,0,5.91,1.1,8,3.29c2.09,2.2,3.14,4.94,3.14,8.24c0,3.3-1.05,6.05-3.14,8.24  c-2.09,2.2-4.76,3.29-8,3.29c-3.24,0-5.91-1.1-8-3.29c-2.09-2.19-3.14-4.94-3.14-8.24C262.02,32.66,263.07,29.91,265.16,27.71z   M268.19,41.63c1.4,1.43,3.06,2.14,4.97,2.14c1.92,0,3.57-0.71,4.97-2.14c1.4-1.43,2.1-3.32,2.1-5.68c0-2.36-0.7-4.25-2.1-5.68  c-1.4-1.43-3.06-2.14-4.97-2.14c-1.92,0-3.57,0.72-4.97,2.14c-1.4,1.43-2.1,3.32-2.1,5.68C266.09,38.31,266.79,40.21,268.19,41.63z   M299.11,47.49c-1.65,0-3.13-0.35-4.44-1.06c-1.31-0.71-2.29-1.59-2.94-2.65h-0.18l0.18,3.01v9.55h-4.07v-31.2h3.89v3h0.18  c0.65-1.06,1.63-1.94,2.94-2.65c1.31-0.71,2.79-1.06,4.44-1.06c2.8,0,5.22,1.1,7.25,3.31c2.03,2.21,3.05,4.95,3.05,8.22  s-1.02,6.01-3.05,8.22C304.33,46.39,301.91,47.49,299.11,47.49z M298.45,43.78c1.88,0,3.51-0.71,4.86-2.14  c1.35-1.43,2.03-3.32,2.03-5.68c0-2.36-0.68-4.25-2.03-5.68c-1.35-1.43-2.98-2.14-4.86-2.14c-1.92,0-3.54,0.71-4.88,2.12  c-1.34,1.41-2.01,3.31-2.01,5.7c0,2.39,0.67,4.29,2.01,5.7C294.91,43.07,296.54,43.78,298.45,43.78z M322.8,47.49  c-3.27,0-5.93-1.09-7.98-3.27c-2.05-2.18-3.07-4.94-3.07-8.26c0-3.15,0.99-5.86,2.98-8.13c1.99-2.27,4.53-3.4,7.62-3.4  c3.21,0,5.78,1.05,7.71,3.14c1.93,2.09,2.9,4.89,2.9,8.4l-0.05,0.75h-17.11c0.12,2.18,0.85,3.91,2.19,5.17  c1.34,1.27,2.91,1.9,4.71,1.9c2.92,0,4.89-1.24,5.92-3.71l3.62,1.5c-0.71,1.68-1.87,3.09-3.49,4.22  C327.14,46.92,325.15,47.49,322.8,47.49z M328.63,33.35c-0.09-1.24-0.66-2.42-1.7-3.54c-1.05-1.12-2.6-1.68-4.66-1.68  c-1.5,0-2.81,0.47-3.91,1.41c-1.11,0.94-1.87,2.21-2.28,3.8H328.63z M340.43,46.78h-4.07V25.13h3.89v3.54h0.18  c0.41-1.18,1.26-2.15,2.54-2.92c1.28-0.77,2.53-1.15,3.73-1.15c1.21,0,2.23,0.18,3.05,0.53l-1.55,3.8  c-0.53-0.21-1.25-0.31-2.17-0.31c-1.47,0-2.78,0.58-3.91,1.75c-1.14,1.17-1.7,2.69-1.7,4.58V46.78z M359.82,47.49  c-2.42,0-4.41-0.59-5.99-1.77c-1.58-1.18-2.73-2.65-3.47-4.42l3.63-1.5c1.15,2.71,3.11,4.07,5.88,4.07c1.27,0,2.31-0.28,3.12-0.84  c0.81-0.56,1.21-1.3,1.21-2.21c0-1.41-0.99-2.37-2.96-2.87l-4.37-1.06c-1.39-0.35-2.7-1.02-3.93-2.01c-1.24-0.99-1.86-2.32-1.86-4  c0-1.91,0.85-3.47,2.54-4.66c1.69-1.19,3.7-1.79,6.03-1.79c1.92,0,3.63,0.44,5.13,1.3c1.5,0.87,2.58,2.11,3.23,3.74l-3.54,1.46  c-0.8-1.92-2.45-2.87-4.95-2.87c-1.21,0-2.23,0.25-3.05,0.75c-0.83,0.5-1.24,1.18-1.24,2.03c0,1.24,0.96,2.08,2.87,2.52l4.29,1.02  c2.03,0.47,3.54,1.28,4.51,2.43c0.97,1.15,1.46,2.45,1.46,3.89c0,1.94-0.8,3.57-2.39,4.86C364.37,46.84,362.32,47.49,359.82,47.49z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          viewBox="0 0 262 48"
        >
          <g id="logo" fill="#1AB394">
            <path
              id="symbol"
              d="M24 0c13.255 0 24 10.745 24 24v20a4 4 0 01-4 4H29l-.003-.338c-.097-5.789-2.694-9.804-7.417-11.919L48 24l-.639-.218C41.644 21.784 36.857 18.857 33 15c-3.857-3.857-6.784-8.644-8.782-14.361L24 0 8 36c0 1.333.333 2.333 1 3 .667.667 1.667 1 3 1l.374.002C19.915 40.082 23 42.592 23 48H4a4 4 0 01-4-4V4a4 4 0 014-4h20zm14.414 9.586c-1.562-1.562-3.461-2.195-4.242-1.414-.781.781-.148 2.68 1.414 4.242 1.562 1.562 3.461 2.195 4.242 1.414.781-.781.148-2.68-1.414-4.242z"
            />
            <path
              id="title"
              d="M67.559 34.601c-1.725-.933-2.912-2.285-3.559-4.058l1.895-1.259c.463 1.555 1.403 2.721 2.82 3.498 1.418.777 3.159 1.166 5.224 1.166 2.096 0 3.737-.404 4.923-1.213 1.187-.808 1.78-1.881 1.78-3.218 0-1.15-.509-2.068-1.526-2.752-1.017-.684-2.804-1.259-5.362-1.725-3.236-.591-5.516-1.384-6.842-2.379-1.325-.995-1.987-2.41-1.987-4.244 0-1.213.369-2.332 1.109-3.358.74-1.026 1.787-1.834 3.143-2.425 1.356-.591 2.897-.886 4.623-.886 2.435 0 4.384.466 5.848 1.399 1.464.933 2.473 2.363 3.028 4.291l-1.988 1.166c-.863-3.203-3.159-4.804-6.888-4.804-1.233 0-2.35.202-3.351.606-1.002.404-1.788.941-2.358 1.609-.57.669-.855 1.391-.855 2.169 0 1.275.524 2.27 1.572 2.985 1.047.715 2.897 1.306 5.547 1.772 3.143.529 5.362 1.29 6.657 2.285 1.294.995 1.941 2.394 1.941 4.198 0 1.99-.84 3.583-2.519 4.78C78.754 35.401 76.497 36 73.661 36c-2.342 0-4.376-.466-6.102-1.399zm37.8-9.748H87.007c.154 2.861.994 5.092 2.519 6.693 1.526 1.601 3.567 2.402 6.125 2.402 1.819 0 3.383-.373 4.692-1.119 1.31-.747 2.258-1.804 2.843-3.172l1.942 1.026c-.863 1.71-2.096 3.024-3.698 3.941-1.603.917-3.529 1.376-5.779 1.376-3.421 0-6.094-1.073-8.02-3.218-1.926-2.146-2.889-5.115-2.889-8.908 0-3.794.932-6.763 2.796-8.908 1.865-2.146 4.477-3.218 7.836-3.218 3.143 0 5.609 1.057 7.396 3.171 1.788 2.114 2.681 4.913 2.681 8.395 0 .529-.03 1.042-.092 1.539zm-15.902-8.698c-1.449 1.57-2.265 3.77-2.45 6.599h16.272c-.154-2.798-.917-4.99-2.289-6.576-1.371-1.585-3.243-2.378-5.616-2.378-2.496 0-4.469.785-5.917 2.355zm21.389 18.516c-1.788-.886-3.098-2.2-3.93-3.941l3.005-2.099c.524 1.368 1.433 2.394 2.727 3.078 1.295.684 2.82 1.026 4.577 1.026 1.818 0 3.205-.326 4.16-.979.956-.653 1.433-1.477 1.433-2.472 0-.902-.446-1.625-1.34-2.169-.894-.544-2.466-1.018-4.715-1.422-2.219-.404-3.976-.894-5.27-1.469-1.295-.576-2.235-1.306-2.82-2.192-.586-.887-.878-1.983-.878-3.289 0-1.274.369-2.44 1.109-3.497.74-1.058 1.803-1.905 3.19-2.542 1.387-.638 2.989-.956 4.807-.956 2.466 0 4.446.458 5.941 1.375 1.494.918 2.565 2.325 3.212 4.221l-3.143 1.866c-.493-1.493-1.241-2.565-2.242-3.218-1.002-.653-2.258-.98-3.768-.98-1.51 0-2.789.342-3.837 1.026-1.047.684-1.571 1.477-1.571 2.379 0 1.026.454 1.819 1.363 2.379.91.559 2.535 1.041 4.877 1.445 3.206.529 5.471 1.322 6.796 2.379 1.325 1.057 1.988 2.55 1.988 4.477 0 1.337-.393 2.527-1.179 3.568-.786 1.042-1.911 1.858-3.375 2.449-1.464.591-3.166.886-5.108.886-2.219 0-4.222-.443-6.009-1.329zm21.111 0c-1.788-.886-3.097-2.2-3.929-3.941l3.004-2.099c.524 1.368 1.433 2.394 2.728 3.078 1.294.684 2.82 1.026 4.576 1.026 1.819 0 3.205-.326 4.161-.979.955-.653 1.433-1.477 1.433-2.472 0-.902-.447-1.625-1.341-2.169-.894-.544-2.465-1.018-4.715-1.422-2.219-.404-3.975-.894-5.27-1.469-1.294-.576-2.234-1.306-2.82-2.192-.585-.887-.878-1.983-.878-3.289 0-1.274.37-2.44 1.109-3.497.74-1.058 1.803-1.905 3.19-2.542 1.387-.638 2.989-.956 4.808-.956 2.465 0 4.445.458 5.94 1.375 1.495.918 2.566 2.325 3.213 4.221l-3.144 1.866c-.493-1.493-1.24-2.565-2.242-3.218-1.001-.653-2.257-.98-3.767-.98-1.51 0-2.789.342-3.837 1.026-1.048.684-1.572 1.477-1.572 2.379 0 1.026.455 1.819 1.364 2.379.909.559 2.535 1.041 4.877 1.445 3.205.529 5.47 1.322 6.795 2.379 1.325 1.057 1.988 2.55 1.988 4.477 0 1.337-.393 2.527-1.179 3.568-.786 1.042-1.911 1.858-3.374 2.449-1.464.591-3.167.886-5.109.886-2.218 0-4.222-.443-6.009-1.329zM150.803 7.48c-.585-.544-.878-1.314-.878-2.309 0-.995.293-1.756.878-2.285.586-.528 1.402-.793 2.45-.793 1.048 0 1.857.265 2.427.793.57.529.855 1.29.855 2.285 0 .995-.285 1.765-.855 2.309-.57.544-1.379.816-2.427.816s-1.864-.272-2.45-.816zm4.9 28.054h-4.946v-23.32h4.946v23.32zm23.099-20.568c2.035 2.145 3.051 5.114 3.051 8.908 0 3.793-1.016 6.762-3.051 8.908-2.034 2.145-4.853 3.218-8.459 3.218s-6.426-1.073-8.46-3.218c-2.034-2.146-3.051-5.115-3.051-8.908 0-3.794 1.017-6.763 3.051-8.908 2.034-2.146 4.854-3.218 8.46-3.218 3.606 0 6.425 1.072 8.459 3.218zm-13.29 2.821c-1.125 1.415-1.687 3.444-1.687 6.087s.562 4.671 1.687 6.086 2.735 2.122 4.831 2.122c2.096 0 3.713-.715 4.854-2.145 1.14-1.43 1.71-3.451 1.71-6.063 0-2.612-.57-4.633-1.71-6.063-1.141-1.431-2.758-2.146-4.854-2.146s-3.706.708-4.831 2.122zm38.724-3.847c1.526 1.461 2.288 3.56 2.288 6.296v15.298h-6.333V22.102c0-3.545-1.371-5.317-4.114-5.317-1.479 0-2.735.528-3.767 1.585-1.033 1.058-1.549 2.674-1.549 4.851v12.313h-6.333v-23.32h5.686l.185 4.151c.77-1.524 1.833-2.674 3.189-3.451 1.356-.778 2.928-1.166 4.715-1.166 2.497 0 4.508.73 6.033 2.192zm4.816-8.489c0-2.301 1.31-3.451 3.93-3.451 2.619 0 3.929 1.15 3.929 3.451 0 2.27-1.31 3.405-3.929 3.405-2.62 0-3.93-1.135-3.93-3.405zm7.073 30.083h-6.333v-23.32h6.333v23.32zm1.789-4.851l9.153-10.54 2.496-2.472-3.698.093h-7.905v-5.55h20.294v4.85l-9.107 10.448-2.496 2.565 4.068-.093h7.951v5.55h-20.756v-4.851zm43.855-4.524h-15.764c.247 1.461.779 2.534 1.595 3.218.817.684 1.903 1.026 3.259 1.026 1.141 0 2.073-.217 2.797-.653.724-.435 1.21-1.072 1.456-1.912l6.379 2.052c-.647 1.99-1.903 3.506-3.767 4.548-1.865 1.041-4.153 1.562-6.865 1.562-4.037 0-7.126-1.057-9.268-3.171-2.142-2.115-3.213-5.1-3.213-8.955 0-3.856 1.048-6.841 3.143-8.955 2.096-2.114 5.07-3.171 8.922-3.171 3.729 0 6.588 1.033 8.575 3.101 1.988 2.068 2.982 4.967 2.982 8.698 0 1.057-.077 1.928-.231 2.612zm-15.81-4.291h8.691c-.37-3.047-1.788-4.57-4.253-4.57-2.496 0-3.976 1.523-4.438 4.57z"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Sponsors
