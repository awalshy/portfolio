import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

type ProjectProps = {
  backgroundColor: string
  color: string
  title: string
  content: string
  imageSource: string
  linkTitle: string
  linkAdress: string
  technology: string
  appAdress?: string
  website?: boolean
  inverted?: boolean
  isPortraitImage?: boolean
}

const ImageBlock = ({
  imageSource,
  isPortrait,
}: {
  imageSource: string
  isPortrait?: boolean
}) => {
  const height = window.innerHeight * 0.6
  const width = (window.innerWidth / 2) * 0.6
  const isSm = window.innerWidth < 450

  const styles = isPortrait
    ? isSm
      ? { width }
      : { height }
    : { width: isSm ? width * 3 : width }

  return (
    <div className="flex justify-center pt-12 xl:pt-20">
      <div>
        <img style={styles} src={imageSource} alt="illustration" />
      </div>
    </div>
  )
}

const DescriptionBlock = ({
  color,
  content,
  linkTitle,
  linkAdress,
  technology,
  appAdress,
  website,
}: {
  color: string
  content: string
  linkTitle: string
  linkAdress: string
  technology: string
  appAdress?: string
  website?: boolean
}): JSX.Element => {
  return (
    <div className="" style={{ height: '100%' }}>
      <p className="text-white py-4 md:py-12 lg:py-16 xl:py-20 px-8 text-md md:text-lg lg:text-xl xl:text-2xl">
        {content}
      </p>
      <div className="flex flex-col lg:flex-row xl:flex-row px-8 my-4 md:my-8 lg:my-8 xl:my-16 text-center">
        <h4
          className="text-md md:text-lg lg:text-xl xl:text-3xl px-8"
          style={{ color }}
        >
          Technology used:
        </h4>
        <p className="text-white text-md md:text-lg lg:text-xl xl:text-3xl">
          {technology}
        </p>
      </div>
      <div className="py-4 md:py-12 lg:py-16 xl:py-16 flex flex-col lg:flex-row xl:flex-row justify-center items-center">
        <Link href={linkAdress}>
          <p
            className="flex items-center text-white mr-8 mb-8 px-8 py-4 border rounded-md hover:bg-orange-800 cursor-pointer"
            style={{ borderColor: color }}
          >
            {linkTitle}
            {website && (
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="3x"
                className="pl-4"
              />
            )}
          </p>
        </Link>
        {appAdress && (
          <a href={appAdress}>
            <img
              className="h-16"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        )}
      </div>
    </div>
  )
}

const Project = ({
  backgroundColor,
  color,
  title,
  content,
  imageSource,
  linkTitle,
  linkAdress,
  appAdress,
  technology,
  website,
  isPortraitImage,
  inverted,
}: ProjectProps): JSX.Element => {
  return (
    <div style={{ backgroundColor, height: '100%' }}>
      <div className="flex flex-row w-full justify-center pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
          {title}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full lg:w-1/2 xl:w-1/2">
          {inverted && (
            <ImageBlock
              imageSource={imageSource}
              isPortrait={isPortraitImage}
            />
          )}
          {!inverted && (
            <DescriptionBlock
              content={content}
              linkTitle={linkTitle}
              linkAdress={linkAdress}
              appAdress={appAdress}
              technology={technology}
              website={website}
              color={color}
            />
          )}
        </div>
        <div style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          <div
            className="md: border lg:border xl:border h-full"
            style={{ borderColor: color }}
          ></div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2">
          {!inverted && (
            <ImageBlock
              imageSource={imageSource}
              isPortrait={isPortraitImage}
            />
          )}
          {inverted && (
            <DescriptionBlock
              content={content}
              linkTitle={linkTitle}
              linkAdress={linkAdress}
              technology={technology}
              appAdress={appAdress}
              website={website}
              color={color}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
