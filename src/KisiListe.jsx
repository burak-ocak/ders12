import Kisi from "./Kisi";

function KisiListe(props){

    return(
        <div className="container">
            <div className="row">
                {
                    props.kisiler.map( (kisi, index)=> <Kisi key={index} /> )
                }
            </div>
        </div>
    )
}

export default KisiListe;