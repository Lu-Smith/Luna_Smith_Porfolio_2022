import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


export const Container = styled.div`
  background: #c3195d; 
`;

export const DigitalArtContainer = styled.div`
  background: #680747; 
  width: 40%;
  height: 200px;
  padding: 50px;
  margin: 0 auto;

  @media screen and (max-width:1200px) {
    width: 60%;
  }

  @media screen and (max-width:820px) {
    padding: 20px;
    height: 150px;
    width: 100%;
  }
  @media screen and (max-width:600px) {
    padding: 10px;
    height: 120px;
  }
`
export const DigitalArtTitle = styled.h1`
  color: white;
  opacity: 90%;
  font-size: 38px;
  text-align: center;
  @media screen and (max-width: 786px) {
    margin-top: 15px;
    font-size: 24px;
  }
`;

export const DigitalArtDescription = styled.p`
  margin: 0 auto;
  margin-top: 24px;
  color: white;
  opacity: 70%;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 600px;
  font-family: "Poiret One", cursive;
  font-style: italic;
  @media screen and (max-width: 786px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const GalleryContainer = styled.div`
  background: white; 
  width: 80%;
  margin: 0 auto;
  padding: 100px;
  column-count: 4;

  video {
    margin: 0 auto;
    display: block;
  }
  @media screen and (max-width: 1200px) {
    width: 85%;
    padding: 60px;
    column-count: 3;

  }
  @media screen and (max-width: 820px) {
    width: 100%;
    padding: 40px;
    column-count: 2;
  }
  @media screen and (max-width: 580px) {
    padding: 20px;
    column-count: 1;
  }
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const GalleryWrap = styled.div`
   margin: 0 5px 20px 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   img {
    border-radius: 20px;
    width: 60%;

    &:hover {
    border: 8px solid #c3195d;
    width: 100%;
   }
   }
   
   video {
    border: 4px solid #680747; ;
    border-radius: 20px;
    width: 50%;
   }

`

export const Icon = styled(Link)`
  text-decoration: none;
  color: #51557e;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 820px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  margin-left: 32px;
  margin-top: 52px;
  color: white;

  &:hover {
    color: #04e2d7;
    transition: 0.2 s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
