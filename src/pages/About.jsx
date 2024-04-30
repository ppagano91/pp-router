import image from '../assets/image.png'
import Link from '../components/Link.jsx'

export default function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <div>
          <p>Desarrollador @ppagano91</p>
          <Link to="/">Home</Link>
          <img src={image} alt="Foto de ppagano" />
        </div>
      </>
    )
  }