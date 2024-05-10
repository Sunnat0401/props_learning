import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import './HomePages.css'
const HomePages = () => {
  return (
    <>
    <Navbar/>
    <div className="continer">
        <div>
            <Card title="Sunnatjon" age="21" img="hfabfbaflbafas" wh='200px' border={"3px solid green"} />
        </div>
    </div>
    </>
  )
}

export default HomePages