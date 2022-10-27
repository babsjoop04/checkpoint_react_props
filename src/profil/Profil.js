// importation proptypes
import PropTypes from "prop-types";

// creation fonction avec ajout parametre par defaut

const Profil = ({
    fullName = "Ndeye Fatou DIOUF", bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam incidunt omnis nulla! Voluptatem voluptas, mollitia at repellendus voluptates voluptate eum perferendis amet et sunt natus velit ex illo esse optio.Mollitia at repellendus voluptates voluptate eum perferendis amet et sunt natus velit ex illo esse optio. Consectetur adipisicing elit. "
    , profession = "Etudiante", children, handleName }) => {

    return (
        <>



            {/* Ajout image profil(children props) et stylisation avec style inline */}
            <div id="profilPhoto" style={{
                position: "absolute",
                left: "5%",
                height: "100%",
                width: "40%"
            }}>
                <img src={children} alt="profilphoto" style={{
                    position: "absolute",
                    top: "5%",
                    left: "5%",
                    height: "90%",
                    width: "90%"
                }} />
            </div>



            {/* ajout nom complet et bio  et stylisation avec style inline */}

            <div id="textProfil" style={{
                position: "absolute",
                right: "5%",
                height: "80%",
                width: "40%",
                textAlign: "center"
            }} >
                <h1>{fullName}</h1>
                <h2>{profession}</h2>
                <div><details>
                    <summary style={{ fontSize: "x-large" }}>Bio</summary>
                    {bio}</details></div>
            </div>


            {/* ajout bouton declancher handleName (function props)avec evenement onClick  et stylisation avec style inline  */}
            <input type="submit" id={"affichage"} value={"Tap here to alert full name!!"} onClick={() => { handleName(fullName) }} style={{
                backgroundColor: "#e95c5b",
                borderRadius: "26px",
                position: "absolute",
                right: "5%",
                bottom: "0%",
                width: "40%",
                textAlign: "center",
                height: "20%",
                fontWeight: "600"
            }}></input>



        </>



    );


}

// ajout verificateur de type

Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}






export default Profil