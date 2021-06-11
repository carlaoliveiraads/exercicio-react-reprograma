import musicas from '../services/dados'

function ListaMusicas() {
    return(
        <div>
           {musicas.map(musica => {
               return (
                   <div>
                        <h5>{musica.id}</h5>
                        <h3>{musica.nome}</h3>
                        <h4>{musica.cantor}</h4>
                        <img src={musica.figura} alt = {musica.nome}/>
                   </div>
               )
           })} 
        </div>
    )
}

export default ListaMusicas
