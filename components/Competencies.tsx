import React from 'react'

const SkillCube = ({
  title,
  progress = 50,
}: {
  title: string
  progress?: number
}) => {
  const container: React.CSSProperties = {
    backgroundColor: '#1E2533',
  }

  const progressBg: React.CSSProperties = {
    backgroundColor: '#E6E6E6',
    width: `${progress}%`,
    opacity: '20%',
  }

  return (
    <div
      className="text-center text-md md:text-xl lg:text-2xl xl:text-5xl text-white mx-3 my-2 relative px-4 py-2"
      style={container}
    >
      <div className="h-full absolute top-0 left-0" style={progressBg}></div>
      <span className="text-white">{title}</span>
    </div>
  )
}

const SkillBlock = () => (
  <div className="h-full w-full bg-orange-800 flex flex-wrap p-2">
    <SkillCube title="C" progress={55} />
    <SkillCube title="C++" progress={30} />
    <SkillCube title="Linux" progress={70} />
    <SkillCube title="PHP" progress={60} />
    <SkillCube title="Laravel" progress={30} />
    <SkillCube title="TS" progress={75} />
    <SkillCube title="React" progress={60} />
    <SkillCube title="RN" progress={45} />
  </div>
)

const Competencies = () => {
  return (
    <div className="w-full lg:w-1/2 py-12 lg:py-24">
      <div className="h-1/2 px-12 lg:px-24">
        <div
          className="border-b border-orange-800 pb-12 lg:px-12"
          style={{ color: '#1E2533' }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl">Languages</h1>
          <div className="flex-row pt-12 text-lg lg:text-2xl text-center">
            <text>French</text>
            <text> - </text>
            <text>English</text>
          </div>
        </div>
      </div>
      <div className="h-1/2 py-4 px-8 lg:px-32">
        <h1
          style={{ color: '#1E2533' }}
          className="text-2xl md:text-3xl lg:text-5xl py-8 lg:py-12"
        >
          Skills
        </h1>
        <div className="flex-col align-center">
          <SkillBlock />
        </div>
      </div>
    </div>
  )
}

export default Competencies
