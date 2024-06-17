import { Button } from '../../components';
import socials from '../../assets/datasets/socials.json';
import './Socials.css'


export default function Socials() {

  return (
    <section className='socialSect'>
      <p id='socialtitle'>Keep Up w/ Me on Socials!</p>
      {socials?.map((social, i) => (
        <Button data={social} key={i} />
      ))}
    </section>
  )
}