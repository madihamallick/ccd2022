import twitterIcon from '../../Images/icons-twitter.svg'
import githubIcon from '../../Images/icons-github.svg'
import linkedinIcon from '../../Images/icons-linkedin.svg'
import facebookIcon from '../../Images/icons-facebook.svg'

interface IProps {
  twitterLink: string
  githubLink: string
  linkedinLink: string
  facebookLink: string
}
const Socials = ({
  twitterLink,
  githubLink,
  linkedinLink,
  facebookLink
}: IProps) => {
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

export default Socials
