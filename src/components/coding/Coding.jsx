import './Coding.css'
import {Button} from '../../components'
import code_related from '../../assets/datasets/coding.json'

export default function Coding() {
  return (
    <section className='coding'>
      <p id='codingtitle'>All Things Coding Related</p>
      {code_related?.map((code, i) => (
        <Button data={code} key={i} />
      ))}
    </section>
  )
}