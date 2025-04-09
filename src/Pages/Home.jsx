import Forms from "../components/Forms"
import Rutas from "../Routes/Rutas"
import '../index.css'
import Valoraciones from "../components/Valoraciones"

const Home = () => {
  return (
    <>
    
    <main>
        <section id="content" className="side_main">
            <h1>Video de fondo </h1>
            <video src="" className="video_back">
              
            </video>
            <Forms/>
        </section>

        <section className="contain_value">
          <Valoraciones/>
          <Valoraciones/>
          <Valoraciones/>
          <Valoraciones/>
          <Valoraciones/>
          <Valoraciones/>
        </section>
    </main>
    </>
  )
}
export default Home