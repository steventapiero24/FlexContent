 import FallingText from "../FallingText "
 
 const SobreMi = () => {
     return (
        <div className="Sobremi-container">
            <FallingText
            text={`No "diseño webs". Construyo experiencias digitales que hacen que tu negocio destaque con 7+ años creando contenido, diseño y desarrollo con propósito..`}
            highlightWords={[`"diseño`, "webs", "7", "años", "digitales", "negocio", "propósito"]}
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
 