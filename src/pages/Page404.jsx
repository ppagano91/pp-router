import notFound from '../assets/404-gif.gif'
import Link from '../components/Link'

export default function Page404(){
  return (
    <>
      <div>This is NOT fine</div>
      <Link to='/'>Come back home!</Link>
      <img src={notFound} alt="Not found" />
    </>
  )
}