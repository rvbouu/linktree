import './YouTube.css'
import {Button} from '../../components'
import recent from '../../assets/datasets/youtube.json'

export default function YouTube() {
  return (
    <section className='yt'>
      <p id='yt_title'>Check Out My Recent Video!</p>
      {recent?.map((video, i) => (
        <Button data={video} key={i} />
      ))}
    </section>
  )
}