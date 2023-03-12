import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'

// MUI (lol)
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// images
import DreamImg from '../../assets/images/dreamAI-pic.jpg';
import BuzzImg from '../../assets/images/buzzbytes-pic.jpg';
import BountyImg from '../../assets/images/bounty-pic.jpeg';
import NoteImg from '../../assets/images/notes-pic.jpg';


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
      <h1>
        {/* Header Section */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={workArray}
            idx={15}
          />
          <br />
        </h1>
      <ImageList sx={{ width: 700, height: 450 }}>
      {itemData.map((item) => (
        <Link to={item.link}>
          <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          sx={{fontSize: 30}}
            title={item.title}
            subtitle={item.link}
          />
        </ImageListItem>
        </Link>
      ))}
    </ImageList>
      </div>
      </div>
    <Loader type="pacman" />
    </>
  );
}

const itemData = [
  {
    img: DreamImg,
    title: 'AI Story Generator',
    rows: 2,
    cols: 2,
    featured: true,
    link: 'https://github.com/iskry/TalesfromtheAlgorithm',
  },
  {
    img: BuzzImg,
    title: 'Buzz Bytes Social Media',
    link: 'https://github.com/tolivercrisp/BuzzBytes',
  },
  {
    img: BountyImg,
    title: 'Star Wars Bounty Prototype',
    link: 'https://github.com/mitchell4563/sith-happens',
  },
  {
    img: NoteImg,
    title: 'Note-Taking App',
    link: 'https://github.com/tolivercrisp/toliver-note-taker',
  },
];





export default Work