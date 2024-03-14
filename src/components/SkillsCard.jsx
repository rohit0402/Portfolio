import React from 'react'

const SkillsCard = ({title}) => {
  return (
    <div className=' flex justify-between items-center mt-5 backdrop-blur-xl shadow-xl border-2 rounded-lg border-gray-900'>
        <h3 className=' font-bold text-xl text-white'>{title}</h3>
    </div>
  )
}

export default SkillsCard