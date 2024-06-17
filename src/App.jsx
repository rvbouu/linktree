import {Header, Socials, YouTube, Coding, Icons} from './components'



export default function App() {

  return (
    <>
      <Header />
      <Icons />
      {/* Latest YouTube Video - try to do with YouTube API */}
      <YouTube />
      {/* Coding Things */}
      <Coding />
      <Socials />
    </>
  )
}
