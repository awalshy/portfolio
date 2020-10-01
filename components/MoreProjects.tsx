import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBitbucket,
  faGithub,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Icon = React.forwardRef(
  (
    {
      icon,
      href,
      onClick,
    }: { href?: string; icon: IconDefinition; onClick?: () => void },
    _ref
  ) => {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        onClick={onClick}
        className="mx-4 hover:scale-150 ease-in duration-500 transform"
      >
        <FontAwesomeIcon icon={icon} size="4x" style={{ color: '#1E2533' }} />
      </a>
    )
  }
)

const MoreProjects = (): JSX.Element => {
  return (
    <div className="h-screen relative" style={{ backgroundColor: '#5C75AA' }}>
      <h2
        className="text-3xl mg:text-4xl lg:text-6xl xl:text-6xl text-center py-20"
        style={{ color: '#1E2533' }}
      >
        Want to see more ?
      </h2>
      <div className="flex justify-center text-mg mg:text-lg lg:text-xl xl:text-2xl text-white">
        <div className="flex flex-col text-center px-4">
          <p>
            You can follow me on social medias ! I&apos;ll publish more projects
            soon
          </p>
          <p>
            Also, I am available to start a new adventure with{' '}
            <em style={{ color: '#1E2533' }}>you</em> based on your ideas ! Feel
            free to contact me
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-row py-12 justify-center w-full">
        <div className="flex flex-col">
          <h6
            className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl pb-8 text-center"
            style={{ color: '#1E2533' }}
          >
            Follow me on
          </h6>
          <div className="flex flex-row">
            <Link href="https://bitbucket.org/awalshytm" passHref>
              <Icon icon={faBitbucket} />
            </Link>
            <Link href="https://github.com/awalshy" passHref>
              <Icon icon={faGithub} />
            </Link>
            <Link href="https://www.linkedin.com/in/walsharthur" passHref>
              <Icon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreProjects
