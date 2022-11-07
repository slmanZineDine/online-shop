import Hero from "../components/home/Hero";
import Popular from "../components/home/Popular";
import Shop from "../components/home/Shop";

const Home = () => {
   return (
      <>
         <Hero />
         <main className="home">
            <Shop />
            <Popular />
         </main>
      </>
   );
};

export default Home;
