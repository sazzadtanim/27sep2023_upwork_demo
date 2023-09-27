'use client'
import svgImage from '@svg/blurry-gradient-haikei.svg'
import Image from 'next/image'
import Link from 'next/link'

interface Box {
  top: number
  left: number
}

export default function Home() {
  const mappedPosition: Box[] = [
    { top: 0, left: 0 },
    { top: 10, left: 10 },
    { top: 20, left: 20 },
    { top: 50, left: 50 },
    { top: 60, left: 60 },
    { top: 80, left: 80 },
    { top: 90, left: 90 },
    { top: 100, left: 100 },
  ]
  const mappedPositionReady = true
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold'>
        Please inspect or check the{' '}
        <Link
          href={'https://github.com/sazzadtanim/27sep2023_upwork_demo'}
          className='underline'
        >
          source
        </Link>{' '}
        code
      </h2>

      <div className=''>
        <div className='relative'>
          <Image alt='background' src={svgImage} />
          {mappedPosition.map((position, i) => (
            <div
              key={i}
              className={`absolute bg-lime-300 ${
                mappedPositionReady ? '' : 'hidden'
              }`}
              // using style is best for this situation
              style={{ top: `${position.top}%`, left: `${position.left}%` }}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
