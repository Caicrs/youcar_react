import "./assets/styles/style.css"
import { cars } from "../src/mocks/cars";
import { useState } from "react";
import "./Components/Overlay.css";
import "./Components/Modal/Modal.css";

function Card () {

    const [paletaSelecionada, setPaletaSelecionada] = useState({});

    const adicionarItem = (paletaIndex) => {
       
            const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }
            // [parametroDoINDEX]: (valor do paletaSelecionada que de inicio ta vazio então ele usa o 0 + soma com 1 
            // OU pega esse ultimo valor atual + soma com 1 e por ai vai)
          
            
            setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
        console.log()
            
    }

    const removerItem = (paletaIndex) => {
        const checker = paletaSelecionada[paletaIndex] 
        if(checker > 0){
            
            const paleta = {[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1}
            setPaletaSelecionada({...paletaSelecionada,...paleta})
        }
        
    }

    const [clickModal,setClickmodal] = useState(0)
    const [indCar,setIndCar] = useState(null)

    const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>);

    const buildModal = (index) =>{
        setIndCar(index) 
       
        setClickmodal(2)
       
        VerMais()
    }
   
    const closeModal = ()=>{
        setClickmodal(0)
    }

    function VerMais (){
       
        return(

            <div className="Overlay" >

                <div className="card_car modal_card">
                        <div className="closeX" onClick={() => closeModal()}>X</div>

                        <img src={cars[indCar].foto} className="img-config box"></img>

                        <div className="title_and_id_box">
                            <h3>{cars[indCar].modelo}</h3>
                            <h4 className="car_id">#{cars[indCar].id}</h4>
                        </div>

                         <div className="year_and_km_box">
                                <h3 className="year">{cars[indCar].ano}</h3>
                                <h3 className="km">{cars[indCar].km} km</h3>
                            </div>

        

                            <div className="price_box">
                                
                                <div className="price">
                                    R$ {cars[indCar].preco}
                                </div>
                            </div>
                      
                       
                            
                       

                </div>
              
            </div>
               
             )
           
    }

    return(
            <>
           
            {clickModal > 0 ? <VerMais/>: ''}
           
            {cars.map((carros,index) => 

                 <div className="card_car" key={`carListItem_${index}`} >
                
           

                        <div className={`box-add ${!paletaSelecionada[index] && "off"}`}>
                            <div className="num-add">{badgeCounter(paletaSelecionada[index], index)}</div>
                        </div>

                    <img src={carros.foto}  className="img-config"/>
                        
                    <div className="title_and_id_box">
                        <h3>{carros.modelo}</h3>
                        <h4 className="car_id">#{carros.id}</h4>
                    </div>

                        <div className="description">
                            {carros.descricao}
                        </div>

                            <div className="year_and_km_box">
                                <h3 className="year">{carros.ano}</h3>
                                <h3 className="km">{carros.km} km</h3>
                            </div>

                         <div className="line"></div>

                            <div className="price_box">
                                
                                <div className="price">
                                    R$ {carros.preco}
                                </div>
                            </div>
                    
                                <form className={`card_buttons top ${!paletaSelecionada[index] && "solo"}`}>
                                    <div type="button"  className="btn-edit ">
                                        <div className="text-btn" onClick={() => adicionarItem(index)} >Adicionar</div>
                                    </div>
                                    
                                    <div type="button" className={`btn-edit ${!paletaSelecionada[index] && "off"}`}> 
                                     <div className="text-btn" onClick={() => removerItem(index)} >Remover</div>
                                    </div>

                                   
                                </form>

                                <form className="card_buttons">
                                    <div type="button"  className="btn-edit show ">
                                            <div className="text-btn " onClick={() => buildModal(index)} >Ver Mais</div>
                                    </div>
                                </form>


                </div>

                

            )}

            


            </>
    )
}

export default Card;
