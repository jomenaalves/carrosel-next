import Image from "next/image";
import { useRef } from "react";
import { products } from "../../database/products";

import { BoxItem, ListItems, MoreInfo,ButtonPrev, Container, ButtonNext } from "./style";
export const ContainerCarrosel = () => {

  const listOfItems = useRef(null);
  const buttonNext = useRef(null);
  const buttonPrev = useRef(null);

  let scroll = 0;
  const handleClickNextButton = () => {
    
    const element = listOfItems.current;

    element.scrollLeft += element.offsetWidth;
    HandleAppearButtons();
  }

  const handleClickPrevButton = () => {
    const element = listOfItems.current;

    element.scrollLeft -= element.offsetWidth;
    HandleAppearButtons();
  }
  const HandleAppearButtons = () => {
    
    const btnNext = buttonNext.current;
    const btnPrev = buttonPrev.current;
    const element = listOfItems.current;

    const scrollLeftComplet = Math.ceil(element.scrollWidth - element.scrollLeft) == element.clientWidth
   
    if(!scrollLeftComplet){
      btnNext.style.display = "block";
    }

    if(element.scrollLeft > 0){
      btnPrev.style.display = "block";
    }
  }
   

  const HandleDisappearButtons = () => {
    const btnNext = buttonNext.current;
    const btnPrev = buttonPrev.current;

    btnNext.style.display = "none";
    btnPrev.style.display = "none";
  }

  return (
    <>

    <Container onMouseEnter={HandleAppearButtons} onMouseLeave={HandleDisappearButtons}>
      <ListItems ref={listOfItems}>
        {products.map(({name, image, price, cents}) => 
          <BoxItem key={Math.random() }>
            <Image src={image} width="224px" height="224"/>
            <div className="line"></div>
            <MoreInfo>
                <p className="name">{name.substring(0, 27)} ...</p>
                <p className="price">R$ {price}, <span className="cents">{cents}</span></p>
            </MoreInfo>
          </BoxItem>
        )}
      </ListItems>
      
      <ButtonPrev ref={buttonPrev} onClick={handleClickPrevButton}>
        <i className="fas fa-chevron-left"></i>
      </ButtonPrev> 

      <ButtonNext onClick={handleClickNextButton} ref={buttonNext}>
        <i className="fas fa-chevron-right"></i>
      </ButtonNext> 
    </Container>
      

    </>
  )

}