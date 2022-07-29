import twitterIcon from '../../Images/icons-twitter.svg'
import githubIcon from '../../Images/icons-github.svg'
import linkedinIcon from '../../Images/icons-linkedin.svg'
import facebookIcon from '../../Images/icons-facebook.svg'

interface IProps {
  twitterLink?: string
  githubLink?: string
  linkedinLink?: string
  facebookLink?: string
  links?: string[]
  className?: string
}
const Socials = ({
  twitterLink,
  githubLink,
  linkedinLink,
  facebookLink
}: IProps) => {
  const getAptLinkComponent = (link: any) => {
    switch (link.title) {
      case 'Twitter':
        return (
          <svg
            className="w-7 h-7 text-lightGrey fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        )
      case 'LinkedIn':
        return (
          <svg
            className="w-7 h-7 text-lightGrey fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        )
      case 'Facebook':
        return (
          <svg
            className="w-7 h-7 text-lightGrey fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )

      case 'Github':
        return (
          <svg viewBox="0 0 16 16" className="w-7 h-7  text-lightGrey fill-current">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        )
      case 'Sessionize':
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7  text-lightGrey fill-current"
          >
            <g
              id="Brand"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Brand-Assets" transform="translate(-1376 -96)">
                <g id="avatar" transform="translate(1360 80)">
                  <g id="brand/logo/sessionize-avatar" transform="translate(16 16)">
                    <path
                      d="M4 0h20c13.255 0 24 10.745 24 24v20a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z"
                      id="background"
                      fill="#FFF"
                    />
                    <path
                      d="M24 0c13.255 0 24 10.745 24 24v20a4 4 0 01-4 4H29l-.003-.338c-.097-5.789-2.694-9.804-7.417-11.92L48 24l-.639-.218C41.644 21.784 36.857 18.857 33 15c-3.857-3.857-6.784-8.644-8.782-14.361L24 0 8 36c0 1.333.333 2.333 1 3 .667.667 1.667 1 3 1l.374.002C19.915 40.082 23 42.592 23 48H4a4 4 0 01-4-4V4a4 4 0 014-4h20zm14.414 9.586c-1.562-1.562-3.461-2.195-4.242-1.414-.781.78-.148 2.68 1.414 4.242 1.562 1.562 3.461 2.195 4.242 1.414.781-.78.148-2.68-1.414-4.242z"
                      id="symbol"
                      fill="#878D89"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        )

      case 'Blog':
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1001_4)">
              <path
                d="M29.3031 32H2.70305C2.34797 32.0023 1.99596 31.9341 1.66739 31.7994C1.33883 31.6648 1.04022 31.4663 0.788854 31.2155C0.537486 30.9647 0.338345 30.6665 0.20295 30.3382C0.0675542 30.01 -0.0014074 29.6581 5.39467e-05 29.303V2.70302C-0.00219649 2.34794 0.0659831 1.99593 0.200649 1.66736C0.335314 1.33879 0.533792 1.04019 0.784602 0.788823C1.03541 0.537455 1.33357 0.338314 1.66184 0.202918C1.99011 0.067523 2.34196 -0.0014386 2.69705 2.27478e-05H29.4011C30.8021 2.27478e-05 32.0001 1.19702 32.0001 2.69702V29.302C32.0001 30.802 30.8031 31.999 29.3031 31.999V32ZM16.0001 5.30302H12.0001C10.2241 5.30382 8.5212 6.00965 7.26544 7.26541C6.00968 8.52117 5.30385 10.2241 5.30305 12V20C5.30385 21.7759 6.00968 23.4789 7.26544 24.7346C8.5212 25.9904 10.2241 26.6962 12.0001 26.697H20.0001C21.776 26.6962 23.4789 25.9904 24.7347 24.7346C25.9904 23.4789 26.6963 21.7759 26.6971 20V14.697C26.6971 13.901 26.0981 13.302 25.2971 13.302H24.0001C23.3031 13.302 22.6971 12.697 22.6971 11.999C22.6974 11.1192 22.5245 10.2478 22.1882 9.43482C21.8519 8.62178 21.3587 7.88296 20.7368 7.26053C20.1149 6.6381 19.3765 6.14425 18.5638 5.80718C17.7511 5.47011 16.8799 5.29642 16.0001 5.29602V5.30302ZM20.0991 21.303H12.0001C11.3031 21.303 10.6971 20.698 10.6971 20C10.6971 19.302 11.3021 18.697 12.0001 18.697H20.0991C20.8031 18.697 21.4021 19.297 21.4021 20C21.4021 20.703 20.8031 21.303 20.0991 21.303ZM16.6971 10.697C17.4011 10.697 18.0001 11.302 18.0001 12C18.0001 12.698 17.4011 13.303 16.6971 13.303H11.9011C11.1971 13.303 10.5981 12.698 10.5981 12C10.5981 11.302 11.1971 10.697 11.9011 10.697H16.6971Z"
                fill="#878D89"
              />
            </g>
            <defs>
              <clipPath id="clip0_1001_4">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )
      default:
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#878D89"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12C8 17.5228 9.79086 22 12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2C9.79086 2 8 6.47715 8 12Z"
              stroke="#878D89"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12H22"
              stroke="#878D89"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )
    }
  }

  return (
    <div className="flex flex-row gap-3 pt-4">
      <a href={twitterLink}>
        <img src={twitterIcon} alt="facebook" />
      </a>
      <a href={githubLink}>
        <img src={githubIcon} alt="facebook" />
      </a>
      <a href={linkedinLink}>
        <img src={linkedinIcon} alt="facebook" />
      </a>
      <a href={facebookLink}>
        <img src={facebookIcon} alt="facebook" />
      </a>
    </div>
  )
}

export default Socials;