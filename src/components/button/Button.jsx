import './Button.css'

export default function Button({ data }) {
  return (
    <button className='links'>
      <a href={data.url}>{data.title}</a>
    </button>
  )
}