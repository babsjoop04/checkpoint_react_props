
import Profil from "./profil/Profil";


function App() {


  const handleName = (mess) => alert(`Hi ${mess}!!!`)

  return (
    <>
      {/* ajout composant avec stylisation inline */}
      <Profil handleName={handleName}><img src={"/african-g5552571f8_1280.jpg"} alt={"profil"} style={{
        position: "absolute",
        top: "5%",
        left: "5%",
        height: "90%",
        width: "90%"
      }} /></Profil>
    </>

  );
}

export default App;
