import Socials from '../Socials/Socials'
import Title from '../Title/Title'
import speakersData from './speakersData.json'

const Speakers = () => {
  const imageBorderStyle = {
    backgroundImage: `url("https://www.linkpicture.com/q/favicon-1.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0.8rem'
  }
  return (
    <>
      <Title heading="Our Amazing Speakers" />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row place-items-center p-5">
        {speakersData.map((speaker, id) => (
          <div
            key={id}
            className="flex md:w-3/5 sm:w-100 flex-col rounded-2xl items-center border border-g-gray-8 p-4"
          >
            <img
              style={{
                borderStyle: 'solid',
                borderWidth: '4px',
                borderColor: '#3d82f8 #e5443f #f9b923 #2ea94f'
              }}
              className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-lg font-light mt-4">Ankit Sharma</div>
            <div className="text-sm font-light mt-2 text-center">
              Machine Learning Engineer at Carted
            </div>
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
