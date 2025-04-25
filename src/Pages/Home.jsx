import Forms from "../components/Forms";
import Rutas from "../Routes/Rutas";
import "../index.css";
import Valoraciones from "../components/Valoraciones";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <main>
        <section id="content" className="side_main">
          <div className="contenedor_Primary">
              <Hero />
              <Forms />
          </div>
        </section>

        <section className="contain_value">
          <Valoraciones />
          <Valoraciones />
          <Valoraciones />
          <Valoraciones />
          <Valoraciones />
          <Valoraciones />
        </section>
      </main>
    </>
  );
};
export default Home;
