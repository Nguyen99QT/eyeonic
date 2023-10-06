import { Carousel } from "react-bootstrap"
import pic1 from './../../assets/Images/Banner/Banner-Rayban-2048x1024.jpeg'
import pic2 from './../../assets/Images/Banner/PLP-Banner-Eyeglasses-B.jpg'
import pic3 from './../../assets/Images/Banner/gucci-banner.jpg'
import pic4 from '../../assets/Images/Banner/Oakley_banner.jpg'
import pic5 from '../../assets/Images/Banner/Burberry_banner.jpg'
import './Live_show.scss'

function Live_show() {
  return (
    <Carousel className="live-show">
      <Carousel.Item>
        <img src={pic1} alt="Banner-Rayban" className="pic"/>        
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic2} alt="PLP-Banner" className="pic"/>        
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic3} alt="gucci-banner" className="pic"/>        
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic4} alt="Oakley_banner" className="pic"/>        
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic5} alt="Burberry_banner" className="pic"/>        
      </Carousel.Item>
    </Carousel>
  )
}

export default Live_show