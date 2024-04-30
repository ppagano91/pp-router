import {navigate} from '../components/Link.jsx'
export default function HomePage () {
    return (
      <>
        <h1>Home</h1>
        <p>Home Page</p>
        <button onClick={()=>navigate("/about")}>Nosotros</button>
      </>
    )
  }