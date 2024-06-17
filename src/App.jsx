import {Header, Socials, YouTube, Coding} from './components'



export default function App() {

  return (
    <>
      <Header />
      {/* Latest YouTube Video - try to do with YouTube API */}
      <YouTube />
      {/* Coding Things */}
      <Coding />
      <Socials />
    </>
  )
}
