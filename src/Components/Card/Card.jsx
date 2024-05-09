import './Card.css'
const Card = ({title, age, img}) => {
  const styleComp = {
    borderRadius:"5px" ,
    border:"2px solid gray" ,
    padding:"10px" ,
    color:"blue" ,
    width:"200px",
    height:"300px",
  }
  return (
    <div style={styleComp} className='card'>
      <h1>{title}</h1>
      <span>{age}</span>
      <img src={img} alt={img} />
    </div>
    )
}

export default Card