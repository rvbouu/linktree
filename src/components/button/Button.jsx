import './Button.css'

export default function Button({data}){
  return(
    <button>
      <a href={data.url}>{data.title}</a>
    </button>
  )
}