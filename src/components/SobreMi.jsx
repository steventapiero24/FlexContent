 import FallingText from "./Atomos/FallingText "
 
 const SobreMi = () => {
     return (
        <div className="Sobremi-container">
            <FallingText
            text={`No solo diseño webs, con mis 6 años en diseño y desarrollo web creo experiencias digitales que hacen crecer tu negocio, Entrego rápido, sin tecnicismos y siempre te acompaño todo el proceso`}
            highlightWords={["diseño", "webs", "6", "años", "experiencia", "crecer", "negocio"]}
            highlightClass="highlighted"
            trigger="scroll"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="3.5rem"
            mouseConstraintStiffness={0.9}
            height="100%"
            />
        </div>
     )
 }

 export default SobreMi
 