import './Icons.css'
import icons from '../../assets/datasets/icons.json'

export default function Icons(){
  return(
    <section className='social_icons'>
    {icons?.map((icon, i) => (
        <a href={icon.link} key={i}>
          <img src={icon.img} className='icons' />
        </a>
      ))}
    </section>
  )
}