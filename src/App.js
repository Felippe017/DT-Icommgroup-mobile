/* import "~slick-carousel/slick/slick.css";  */
import './App.css';
import Slider from "react-slick";
import { prodCarouselOne, prodCarouselTwo } from "./products";
/* import Slider from "react-slick"; */

function App() {

  const settings = {
   /*  dots: false,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, */
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      } 
    ]    
  };

  return (
    <section className="flex-section-main">
      <div className="flex-section"> 
           <h2>Editorias Shop2gether</h2> 
           <Slider {...settings} className="flex-div">
                { prodCarouselOne.map(({ id, image, message, title, message_preco, preco }) => {
                   return (
                        <div key={id} className="flex-divs">
                            <div className="cards">
                                <img src={ image } alt="imagem do card"/>
                                <div className="sub-div-card">
                                    <div className="mixed">{message}</div>
                                    <h3 className="vestidos">{title}</h3>
                                </div>
                                <div className="preco-conteiner">
                                    <div>{message_preco}</div>
                                    <div className="valor">{preco}</div> 
                                </div>
                            </div> 
                        </div>   
                   )})
                }      
{/*               <div className="flex-divs imagem">
                    <div className="cards">
                        <div className="sub-div-card">
                            <div className="mixed">Mixed</div>
                            <h3 className="vestidos">Vestidos</h3>
                        </div>
                        <div className="preco-conteiner">
                            <div>a partir de </div>
                            <div className="valor">R$599</div> 
                       </div>
                    </div> 
               </div> 
               <div className="flex-divs imagem-2">
                   <div className="cards">
                       <div className="sub-div-card">
                           <span className="mixed">Dia dos namorados</span>   
                           <h3 className="vestidos">Presente</h3>   
                       </div> 
                       <div className="preco-conteiner">
                            <div>a partir de </div>
                            <div className="valor">R$69</div> 
                        </div>    
                    </div>
               </div> 
               <div className="flex-divs imagem-3">
                   <div className="cards">
                        <div className="sub-div-card">
                            <div className="mixed">Blusas</div>
                            <h3 className="vestidos">Inverno 2021</h3>     
                        </div>
                        <div className="preco-conteiner">
                            <div>a partir de </div>
                            <div className="valor">R$149</div> 
                       </div>
                    </div>                   
               </div> */}
           </Slider>
            <h2>Editorias Shop2gether</h2>   
            <Slider {...settings} className="flex-div">
                { prodCarouselTwo.map(({ id, image, message, title, message_preco, preco }) => {
                    return (
                        <div key={id} className="flex-divs">
                            <div className="cards">
                                <img src={ image } alt="imagem do card"/>
                                <div className="sub-div-card">
                                    <div className="mixed">{message}</div>
                                    <h3 className="vestidos">{title}</h3>
                                </div>
                                <div className="preco-conteiner">
                                    <div>{message_preco}</div>
                                    <div className="valor">{preco}</div> 
                                </div>
                            </div> 
                        </div>   
                    )})
                }      
              {/*  <div className="flex-divs imagem-4">
                   <div className="cards">
                        <div className="sub-div-card">
                            <div>Animale</div> 
                            <h3>Animal Print</h3>
                        </div> 
                        <div className="preco-conteiner">
                            <div>a partir de </div>
                            <div className="valor">R$269</div> 
                       </div>
                   </div>
               </div> 
               <div className="flex-divs imagem-5"> 
                   <div className="cards">
                       <div className="sub-div-card">
                            <div>ALEXANDRE BRIMAN</div>
                            <h3>Sandálias</h3>  
                       </div>
                       <div className="preco-conteiner">
                            <div>a partir de </div>
                            <div className="valor">R$349</div> 
                       </div>
                   </div>
               </div>
               <div className="flex-divs imagem-6">
                   <div className="cards">
                       <div className="sub-div-card">
                           <div>Tendência</div>     
                           <h3>All Jeans</h3>    
                       </div>
                       <div className="preco-conteiner">
                            <div>a partir de </div>
                            <div className="valor">R$279</div> 
                        </div>
                    </div>
               </div>  */}
            </Slider> 
      </div> 
   </section>
  );
}

export default App;
