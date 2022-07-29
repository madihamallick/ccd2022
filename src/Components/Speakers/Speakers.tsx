import Socials from '../Socials/Socials'
import Title from '../Title/Title'
import speakersData from './speakersData.json'

const Speakers = () => {
  const imageBorderStyle = {
    // border: '1px solid #eaeaea',
    backgroundImage: `url("https://www.linkpicture.com/q/favicon-1.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0.8rem'
  }
  return (
    <>
      <Title heading="Our Amazing Speakers" />
      <div
        className="grid sm:grid-cols-1 md:grid-cols-4 grid-flow-row place-items-center "
        id="speakers-grid"
      >
        {speakersData.map((speaker, id) => (
          <div
            key={id}
            className="flex sm:w-100 flex-col rounded-xl items-center mb-4 shadow-lg md:w-5/6"
          >
            <div style={imageBorderStyle}>
              <img
                src={speaker.image}
                alt="profile"
                className="rounded-full m-2.5 w-40 h-40 "
              />
            </div>
            <h3 className="text-xl font-bold">{speaker.name}</h3>
            <h3 className="text-xl text-lightGrey font-semibold ">
              {speaker.position}
            </h3>
            <p className="text-sm text-lightGrey text-center py-3">
              {speaker.description}
            </p>
            <Socials
              twitterLink={speaker.twitterLink}
              githubLink={speaker.githubLink}
              linkedinLink={speaker.linkedinLink}
              facebookLink={speaker.facebookLink}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Speakers
