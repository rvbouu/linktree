import { Header, Socials, YouTube, Coding, Icons } from './components'
import Loading from './pages/loading/Loading'
import { useEffect, useState } from "react";


export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div className='viewport'>
      <Header />
      <Icons />
      {/* Latest YouTube Video - try to do with YouTube API */}
      <YouTube />
      {/* Coding Things */}
      <Coding />
      <Socials />
    </div>
  )
}
