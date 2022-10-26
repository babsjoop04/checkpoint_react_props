
import Profil from "./profil/Profil";


function App() {


  const handleName = (mess) => alert(`Hi ${mess}!!!`)

  return (
    <>
      {/* ajout composant avec stylisation inline */}
      <Profil fullName="Kiné Dione" bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam incidunt omnis nulla! Voluptatem voluptas, mollitia at repellendus voluptates voluptate eum perferendis amet et sunt natus velit ex illo esse optio.Mollitia at repellendus voluptates voluptate eum perferendis amet et sunt natus velit ex illo esse optio. Consectetur adipisicing elit. " profession="Photographe" handleName={handleName}><img src={"/african-g5552571f8_1280.jpg"} alt={"profil"} /></Profil>
    </>

  );
}

export default App;
