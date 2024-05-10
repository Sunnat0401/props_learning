import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import './Service.css'
const Service = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <div>
    Services
        <Card title="Avazbek" age={"21"} phoneNumber={"+998901249484"} radius="20px" border="5px dashed red" wh="500px" color='green'/>
    </div>
    </div>
    </>
  )
}

export default Service





















