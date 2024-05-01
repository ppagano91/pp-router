import image from '../assets/image.png'
import Link from '../components/Link.jsx'

const i18n = {
  es:{
    title: 'Sobre Nosotros',
    button: 'Volver al Inicio!',
    description: 'Hola! Me llamo @ppagano y estoy creando un clon de React Router'
  },
  en:{
    title: "About Us",
    button: 'Go to Home!',
    description: "Hi! My name is @ppagano and I am creating a clone of React Router"
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}) {
    const i18n = useI18n(routeParams.lang ?? 'es')
  
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <p>{i18n.description}</p>
          <Link to="/">{i18n.button}</Link>
          <img src={image} alt="Foto de ppagano" />
        </div>
      </>
    )
  }