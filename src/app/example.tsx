import React, { useState } from 'react'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import './example.scss'

const scrambleTexts: ScrambleTexts = [
  'перезагрузите если нет ответа'
]

const Example: React.FC = () => {
  const [] = useState(false)

  return (
    <>
      <div className='Example'>
        <span className='Example__blinker'>_</span>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={15}
          nextLetterSpeed={200}
          pauseTime={120}
          paused={false}
        />
      </div>
{/* 
      <button onClick={() => void setPause(!pause)}>
        {pause ? 'Resume' : 'Pause'}
      </button> */}
    </>
  )
}

export default Example