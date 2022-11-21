import react from "react";


function Links({github,linkedin}){
    return (
        <div>
        <h2>Links</h2>

       <a href={github}>{github}</a>
       <a href={linkedin}>{linkedin}</a>
       </div>
    )
}
export default Links