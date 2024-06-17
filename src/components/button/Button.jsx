import './Button.css'

export default function Button({ data }) {
  return (
    <a href={data.url} target='_blank'><button className='links'>
      {data.title}</button></a>
  )
}