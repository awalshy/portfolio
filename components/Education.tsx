import React from 'react'

type EdBlock = {
  title: string
  start: string
  end: string
}

const EducationBlock = ({ title, start, end }: EdBlock) => (
  <div className="my-3">
    <h1 className="text-white text-2xl">{title}</h1>
    <div>
      <text className="text-white text-md">{start}</text>
      <text className="text-white text-md"> - </text>
      <text className="text-white text-md">{end}</text>
    </div>
  </div>
)

const Education = () => {
  return (
    <div className="w-1/2 py-24 px-12" style={{ backgroundColor: '#1E2533' }}>
      <div className="text-orange-800 text-5xl">Education</div>
      <div className="px-48 my-20">
        <div className="border-b border-orange-800"></div>
      </div>
      <div className="w-full">
        <div className="w-full pl-12 text-white text-4xl">Current</div>
        <div className="w-full flex-col flex px-24 py-4">
          <EducationBlock title="Epitech Lyon" start="2017" end="2022" />
          <EducationBlock
            title="Stockholm University"
            start="2020"
            end="2021"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full pl-12 text-white text-4xl">Passed</div>
        <div className="w-full flex-col flex px-24 py-4">
          <EducationBlock
            title="Lycee Prive St Bonnet de Galaure"
            start="2013"
            end="2017"
          />
        </div>
      </div>
    </div>
  )
}

export default Education
