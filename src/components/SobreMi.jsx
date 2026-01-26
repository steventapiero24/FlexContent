 import FallingText from "./Atomos/FallingText "
 
 const SobreMi = () => {
     return (
        <div className="Sobremi-container">
            <FallingText
            text={`No solo diseño sitios web. Con más de 7 años de experiencia en creación de contenido, diseño y desarrollo web, creo experiencias digitales que representan tu negocio con calidad, coherencia y personalidad.`}
            highlightWords={["diseño", "webs", "7", "años", "experiencia", "crecer", "negocio", "coherencia", "personalidad"]}
            highlightClass="highlighted"
            trigger="scroll"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="4rem"
            mouseConstraintStiffness={0.9}
            height="100%"
            />
        </div>
     )
 }

 export default SobreMi
 