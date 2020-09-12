import React, { useEffect, useState } from 'react'

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
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

type LogoBlockType = {
  title?: string
  logo?: IconDefinition
  svg?: string
  screenWidth: number
}

const LogoBlock = ({
  title = 'Default',
  logo,
  svg,
  screenWidth,
}: LogoBlockType) => {
  const getSize = (): SizeProp => {
    if (screenWidth > 1200) return '5x'
    if (screenWidth > 500) return '3x'
    return 'lg'
  }

  return (
    <div className="block">
      <div className="flex justify-center mx-5 my-2 w-20 h-20">
        {logo && (
          <FontAwesomeIcon
            className="text-white"
            icon={logo}
            size={getSize()}
          />
        )}
        {svg && <img src={svg} className="text-white w-20 h-20" />}
      </div>
      <div className="text-center text-white">
        <text>{title}</text>
      </div>
    </div>
  )
}

const Profile = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWidthResize = () => {
      setWidth(window.innerWidth)
    }

    handleWidthResize()
    window.addEventListener('resize', handleWidthResize)
    return () => {
      window.removeEventListener('resize', handleWidthResize)
    }
  })

  return (
    <div id="presentation" className="sm:h-screen md:h-screen lg:h-screen">
      <div className="relative pb-4 md:pb-8 lg:pb-16 pr-8 md:pr-12 lg:pr-24 h-full">
        <div
          style={{ backgroundColor: '#1E2533' }}
          className="w-full h-full px-12 py-24"
        >
          <div className="h-full">
            <div className="text-6xl mb-16 lg:mb-24 text-orange-800">Hi !</div>
            <div className="text-md md:text-lg lg:text-xl text-white pl-8 lg:pl-24">
              I&apos;m a fullstack student developer !<br />
              Currently I live in Stockholm for my studies.
              <br />
              Normaly I am based in Lyon, France.
              <br />I like web and mobile development. See feel free to check my
              projects !<br />
              Feel free to contact me, I am looking for new projects !
            </div>
            <div className="flex justify-center mt-8">
              <div>
                <div
                  className="py-2 px-4 rounded-md shadow-xl hover:border-orange-800 hover:border-2 hover:text-orange-800 hover:scale-110 transition ease-in duration-200 transform"
                  style={{ backgroundColor: '#e6e6e6' }}
                >
                  See my projects
                </div>
              </div>
            </div>
            <div className="w-full lg:flex justify-between row h-4/10 mt-8 lg:mt-28">
              <div className="mb-12 lg:mb-0">
                <div className="text-center text-lg text-orange-800 py-4">
                  Technologies I like to use
                </div>
                <div className="flex flex-wrap row w-full justify-center">
                  <LogoBlock title="Git" logo={faGit} screenWidth={width} />
                  <LogoBlock
                    title="TypeScript"
                    svg="/icons/typescript.svg"
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="ReactJS"
                    logo={faReact}
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="NextJS"
                    svg="/icons/next-js.svg"
                    screenWidth={width}
                  />
                </div>
              </div>
              <div>
                <div className="text-center text-lg text-orange-800 py-4">
                  Tools I like to use
                </div>
                <div className="flex row flex-wrap justify-center">
                  <LogoBlock
                    title="GitHub"
                    logo={faGithub}
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="Digital Ocean"
                    svg="/icons/digital-ocean.svg"
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="GitKraken"
                    logo={faGitkraken}
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="Ubuntu"
                    svg="/icons/ubuntu.svg"
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="Docker"
                    logo={faDocker}
                    screenWidth={width}
                  />
                  <LogoBlock
                    title="VSCode"
                    svg="/icons/vscode.svg"
                    screenWidth={width}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 lg:shadow-xl flex justify-end top-0 md:top-3">
          <img
            src="/images/portrait.png"
            width={320}
            height={480}
            className="w-1/2 md:w-1/2 lg:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
