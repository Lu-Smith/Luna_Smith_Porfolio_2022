import ImgC1 from "../images/illustrations/characters/Little Witch.png";
import ImgC2 from "../images/illustrations/characters/queen.png";
import ImgC3 from "../images/illustrations/characters/turtle.png";
import ImgC4 from "../images/illustrations/characters/zebra - Copy.png";
import ImgC5 from "../images/illustrations/characters/bunny.png";
import ImgC6 from "../images/illustrations/characters/giraffe.png";
import ImgC7 from "../images/illustrations/characters/jellyfish.png";
import ImgC8 from "../images/illustrations/characters/monkey.png";
import ImgC9 from "../images/illustrations/characters/owl.png";
import ImgC10 from "../images/illustrations/characters/puppy.png";
import ImgC11 from "../images/illustrations/characters/snake.png";
import ImgC12 from "../images/illustrations/characters/bee.png";
import ImgC13 from "../images/illustrations/characters/Sociaty10.png";
import ImgC14 from "../images/illustrations/characters/elf2.png";
import ImgC15 from "../images/illustrations/characters/bird.png";
import ImgC16 from "../images/illustrations/characters/Sociaty14.png";
import ImgC17 from "../images/illustrations/characters/halloween cat.png";
import ImgC18 from "../images/illustrations/characters/ghosts.png";
import ImgC19 from "../images/illustrations/characters/moles.png";
import ImgC20 from "../images/illustrations/characters/Little Witch - Copy.png";
import ImgC21 from "../images/illustrations/characters/owl - Copy.png";
import ImgC22 from "../images/illustrations/characters/parrot - Copy.png";
import ImgC23 from "../images/illustrations/characters/puppy - Copy.png";
import ImgC24 from "../images/illustrations/characters/queen - Copy.png";
import ImgC25 from "../images/illustrations/characters/snake - Copy.png";
import ImgC26 from "../images/illustrations/characters/turtle 2.png";
import ImgC27 from "../images/illustrations/characters/reindeer.png";
import ImgR1 from "../images/illustrations/dictionary/elf-reading.png";
import ImgR2 from "../images/illustrations/dictionary/owlreading.png";
import ImgR3 from "../images/illustrations/dictionary/turtlereading.png";
import ImgR4 from "../images/illustrations/dictionary/bookshellturtle.png";
import ImgB1 from "../images/illustrations/characters/Snowman.jpg";
import ImgM1 from "../images/illustrations/mermaids/HedgeHogMermaid.jpg";
import ImgM2 from "../images/illustrations/mermaids/KittyMermaid.jpg";
import ImgM3 from "../images/illustrations/mermaids/MonkeyMermaid.jpg";
import ImgM4 from "../images/illustrations/mermaids/PuppyMermaid.jpg";
import ImgM5 from "../images/illustrations/mermaids/SnowmanMermaid.jpg";



import {
  Container,
  GalleryContainer,
  DigitalArtContainer,
  DigitalArtTitle,
  DigitalArtDescription,
  Icon,
  CloseIcon,
  GalleryWrap
} from "./styles/DACharacters.styled";

const CharactersPage = () => {
  let charactersdata = [
    {
      id: 1,
      imgSrc: ImgB1,
      alt: "Snowman - a cartoon character with a snowy background by Luna Smith",
    },
    {
      id: 2,
      imgSrc: ImgC27,
      alt: "Reindeer with a mistletoe, a cartoon character by Luna Smith",
    },
    {
      id: 3,
      imgSrc: ImgC20,
      alt: "Little Witch flying - a halloween cartoon character by Luna Smith",
    },
    {
      id: 4,
      imgSrc: ImgC2,
      alt: "Queen, a cartoon character by Luna Smith",
    },
    {
      id: 5,
      imgSrc: ImgC24,
      alt: "Queen, a cartoon character by Luna Smith",
    },
    {
      id: 6,
      imgSrc: ImgC3,
      alt: "Turtle, a cartoon character by Luna Smith",
    },
    {
      id: 7,
      imgSrc: ImgC26,
      alt: "Turtle, a cartoon character by Luna Smith",
    },
    {
      id: 8,
      imgSrc: ImgC4,
      alt: "Zebra, a cartoon character by Luna Smith",
    },
    {
      id: 9,
      imgSrc: ImgC5,
      alt: "Bunny, a cartoon character by Luna Smith",
    },
    {
      id: 10,
      imgSrc: ImgM5,
      alt: "Snowman mermaid, a cartoon character by Luna Smith",
    },
    {
      id: 11,
      imgSrc: ImgM3,
      alt: "Monkey mermaid, a cartoon character by Luna Smith",
    },
    {
      id: 12,
      imgSrc: ImgM4,
      alt: "Puppy mermaid, a cartoon character by Luna Smith",
    },
    {
      id: 13,
      imgSrc: ImgM1,
      alt: "Hedgehog mermaid, a cartoon character by Luna Smith",
    },
    {
      id: 14,
      imgSrc: ImgM2,
      alt: "Kitty mermaid, a cartoon character by Luna Smith",    
    },
    {
      id: 15,
      imgSrc: ImgC6,
      alt: "Giraffe, a cartoon character by Luna Smith",
    },
    {
      id: 16,
      imgSrc: ImgC7,
      alt: "Jellyfish, a cartoon character by Luna Smith",
    },
    {
      id: 17,
      imgSrc: ImgC8,
      alt: "Monkey, a cartoon character by Luna Smith",
    },
    {
      id: 18,
      imgSrc: ImgC22,
      alt: "Parrot, a cartoon character by Luna Smith",
    },
    {
      id: 19,
      imgSrc: ImgC9,
      alt: "Owl, a cartoon character by Luna Smith",
    },
    {
      id: 20,
      imgSrc: ImgC21,
      alt: "Owl, a cartoon character by Luna Smith",
    },
    {
      id: 21,
      imgSrc: ImgC1,
      alt: "Little Witch - a halloween cartoon character by Luna Smith",
    },
    {
      id: 22,
      imgSrc: ImgC23,
      alt: "Puppy, a cartoon character by Luna Smith",
    },
    {
      id: 23,
      imgSrc: ImgC11,
      alt: "Snake, a cartoon character by Luna Smith",
    },
    {
      id: 24,
      imgSrc: ImgC25,
      alt: "Snake, a cartoon character by Luna Smith",
    },
    {
      id: 25,
      imgSrc: ImgC12,
      alt: "Bee, a cartoon character by Luna Smith",
    },
    {
      id: 26,
      imgSrc: ImgC13,
      alt: "Elephant, a cartoon character by Luna Smith",
    },
    {
      id: 27,
      imgSrc: ImgC15,
      alt: "Bird, a cartoon character by Luna Smith",
    },
    {
      id: 28,
      imgSrc: ImgC14,
      alt: "Elf, a cartoon character by Luna Smith",
    },
    {
      id: 29,
      imgSrc: ImgC16,
      alt: "Halloween black cat, a cartoon character by Luna Smith",
    },
    {
      id: 30,
      imgSrc: ImgC17,
      alt: "Halloween black cat, a cartoon character by Luna Smith",
    },
    {
      id: 31,
      imgSrc: ImgC18,
      alt: "Ghosts, a cartoon character by Luna Smith",
    },
    {
      id: 32,
      imgSrc: ImgC19,
      alt: "Moles, a cartoon character by Luna Smith",
    },
    {
      id: 33,
      imgSrc: ImgR1,
      alt: "Elf reading a book, a cartoon character by Luna Smith",
    },
    {
      id: 34,
      imgSrc: ImgR2,
      alt: "Owl reading a book, a cartoon character by Luna Smith",
    },
    {
      id: 35,
      imgSrc: ImgR3,
      alt: "Turtle holding a book, a cartoon character by Luna Smith",
    },
    {
      id: 36,
      imgSrc: ImgR4,
      alt: "Turtle with a book shell, a cartoon character by Luna Smith",
    },
    {
      id: 37,
      imgSrc: ImgC10,
      alt: "Puppy, a cartoon character by Luna Smith",
    }
  ];

  return (
    <Container>
      <Icon to="/digitalart">
        <CloseIcon />
      </Icon>
      <DigitalArtContainer>
        <DigitalArtTitle>Characters</DigitalArtTitle>
        <DigitalArtDescription>
          Look ...
        </DigitalArtDescription>
      </DigitalArtContainer>
      <GalleryContainer>
        {charactersdata.map((item, index) => {
          return (
            <GalleryWrap key={index}>
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                />
            </GalleryWrap>
          );
        })}
      </GalleryContainer>
    </Container>
  );
};

export default CharactersPage;