import './Card.css'
const Card = ({title="Sariqjon", age="12", img="Rasmlaaqaaasskfsdsdsdc nmadurlar", radius ="20px", border ="2px dashed aqua", wh="300px" , phoneNumber="+998901249484", color="blue"}) => {
  const styleComp = {
    borderRadius: radius ,
    border: border ,
    padding:"10px" ,
    color:color ,
    width: wh,
    height:"300px",
  }
  return (
    <div style={styleComp} className='card'>
      <h1>{title}</h1>
      <span>{age}</span>
      <img src={img} alt={img} />
      <p>{phoneNumber}</p>
    </div>
    )
}

export default Card