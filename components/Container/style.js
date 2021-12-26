import styled from "styled-components";

export const BoxItem = styled.div`
  width: 224px;
  margin-right: 5px;

  border-radius: 2px;
  border: 1px solid #ccc;
  background-color: #fff!important;
  flex: none;

  .line{
    width: 100%;
    height: 1px;
    background-color: #f3f4f5;
  }
`; 

export const ListItems = styled.div`

  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    opacity: 0;
  }
`;
export const Container = styled.div`
  width: 1030px;
  margin: 50px auto;

  position: relative;
`;
export const MoreInfo = styled.div`

  padding: 20px 16px;
  font-weight: 300;
  font-size: 23px;
  letter-spacing: .5px;

  span{
    margin-left: -5px;
    font-size: 15px;
  }

  .name{
    font-size: 18px;
  }
`;

export const ButtonPrev = styled.button`
display: none;
  position: absolute;
  width: 64px;
  height: 64px;
  left: -32px;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgb(0,0,0,.2);
  
  border: none;
  background-color: #fff;

  color: #228be6;
  transition: all .2s;

  &:hover{
    box-shadow: 0 2px 4px 0 rgb(0,0,0,.7);
  }
`;

export const ButtonNext = styled.button`
  display: none;
 position: absolute;
  width: 64px;
  height: 64px;
  right: -32px;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgb(0,0,0,.2);
  z-index: 9999;
  
  border: none;
  background-color: #fff;

  color: #228be6;
  transition: all .2s;

  &:hover{
    box-shadow: 0 2px 4px 0 rgb(0,0,0,.7);
  }
`;