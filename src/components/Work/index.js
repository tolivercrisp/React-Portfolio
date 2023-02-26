import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'

const Work = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const workArray = 'Work'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <div className="container work-page">
      <div className="text-zone">
      <Loader type="pacman" />
      </div>
    </div>
    </>
  )
}

export default Work