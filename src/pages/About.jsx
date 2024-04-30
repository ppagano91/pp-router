import image from '../assets/20221029_183015.jpg'
import {navigate} from '../components/Link.jsx'

export default function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <div>
          <p>Desarrollador @ppagano91</p>
          <img src={image} alt="Foto de ppagano" />
        </div>
        <button onClick={()=>navigate("/")}>Home</button>
      </>
    )
  }