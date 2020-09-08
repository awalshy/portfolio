import React from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faReact,
  faGit,
  IconDefinition,
  faGitkraken,
  faDocker,
} from '@fortawesome/free-brands-svg-icons'

type LogoBlockType = {
  title?: string
  logo?: IconDefinition
  svg?: string
}

const LogoBlock = ({ title = 'Default', logo, svg }: LogoBlockType) => (
  <div className="block">
    <div className="flex justify-center mx-5 my-2">
      {logo && <FontAwesomeIcon className="text-white" icon={logo} size="5x" />}
      {svg && <img src={svg} className="text-white w-20 h-20" />}
    </div>
    <div className="text-center text-white">
      <text>{title}</text>
    </div>
  </div>
)

const Profile = () => {
  return (
    <div id="presentation" className="h-screen">
      <div className="relative pb-16 pr-24 h-full">
        <div
          style={{ backgroundColor: '#1E2533' }}
          className="w-full h-full px-12 py-24"
        >
          <div className="h-full">
            <div className="text-6xl mb-24 text-orange-800">Hi !</div>
            <div className="text-xl text-white pl-24">
              I&apos;m a fullstack student developer !<br />
              Currently I live in Stockholm for my studies. Normaly I am based
              in Lyon, France.
              <br />I like web and mobile development. See <em>
                my projects
              </em>{' '}
              !<br />
              Feel free to contact me, I am looking for new projects !
            </div>
            <div className="w-full flex justify-between row h-4/10 mt-32">
              <div>
                <div className="text-center text-lg text-orange-800 py-4">
                  Technologies I like to use
                </div>
                <div className="flex row">
                  <LogoBlock title="Git" logo={faGit} />
                  <LogoBlock title="TypeScript" svg="/icons/typescript.svg" />
                  <LogoBlock title="ReactJS" logo={faReact} />
                  <LogoBlock title="NextJS" svg="/icons/next-js.svg" />
                </div>
              </div>
              <div>
                <div className="text-center text-lg text-orange-800 py-4">
                  Tools I like to use
                </div>
                <div className="flex row">
                  <LogoBlock title="GitHub" logo={faGithub} />
                  <LogoBlock
                    title="Digital Ocean"
                    svg="/icons/digital-ocean.svg"
                  />
                  <LogoBlock title="GitKraken" logo={faGitkraken} />
                  <LogoBlock title="Ubuntu" svg="/icons/ubuntu.svg" />
                  <LogoBlock title="Docker" logo={faDocker} />
                  <LogoBlock title="VSCode" svg="/icons/vscode.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 shadow-xl">
          <img src="/images/portrait.png" width={320} height={480} />
        </div>
      </div>
    </div>
  )
}

export default Profile
