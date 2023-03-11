import styled from 'styled-components';
//import tw from 'twin.macro';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const EventSecn = styled.div`
height: 100vh;
  width: 100vw;
  background-color: black;
  position: relative;
  overflow: hidden;
  `
export const Logo = styled.img`
  position: absolute;
  z-index: 50;
  display: inline-block;
  cursor: pointer;
  
  @media  screen and (max-width: 768px) {
    left: 4rem;
    top: 1rem;
  }
  
  @media  screen and (min-width : 768px) {
    left: 4rem;
    top: 2rem;
  }
`
export const EveHeadingSec = styled.div`
  position: absolute;
  z-index: 999;
  height: 3rem;
  text-align: top;
  animation-duration: 3s;
  animation-name: slidein;
  display : flex;
  
  @media  screen and (max-width: 768px) {
    top: 5rem;
    right: 7rem;
  }
  
  @media  screen and (min-width : 768px) {
    top: 2rem;
    right: 12rem;
  }

  @keyframes slidein {
    from {
    opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`
export const HeadSty1 = styled.h1`
  display: inline-block;
  font-size: 2.5rem;
  position:absolute;
  right: 5rem;
  top:-10px ;
`
export const HeadSty2 = styled.h1`
  display: inline-block;
  font-size: 1.8rem;
  position:absolute;
  right: -2rem;
  top:-4.5px ; 
`
export const Stick = styled.div`
  display:inline-block;
  position:absolute;
  top:5px ;
  right: 4.5rem;
  width: 3px;
  height:50px ;
  border-radius: 16px;
  background-color: black;
`
export const Main = styled.div`
 height: 100vh;
 position: absolute;
 background-color:${props => props.info.bgColor};
 
  background-image:url(${props => props.property.bgImgUrl});
  background-size:cover;
  background-size:center;
  transition: margin-left .5s linear .25s,background-image .6s ease-in-out .35s;
  /* transition:background-image .5s ease-out .25s; */
  
  
  @media  screen and (max-width: 768px) {
    margin-left:${props => props.property.marginLeft};
    width: 80%;
  }
  
  @media  screen and (min-width : 768px) {
    margin-left:${props => props.property.marginLeftDesktop};
    width: 90%;
  }

`
export const DisplayEvent = styled.div`
  /* transition: all .5s linear .25s; */
  position: absolute;
  top: 10rem;
  right: 4rem;
  height: 400px;
  width: 500px;
  animation-duration: 3s;
  animation-name: slidein;
  @keyframes slidein {
    from {
    opacity: 0;
    }

    to {
      opacity: 100;
    }
}
`
export const EventRouteBack = styled.div`
  height: 38px;
  width: ${props => props.property};
  position: absolute;
  background-color: #2b2a2a6c;
  border-radius: 35px;
  transition: width .25s linear;
`
export const EventRoute = styled.div`
position: absolute;
  height: 38px;
  width: 210px;
  display: grid;
  grid-template-columns: 1fr 38px 38px 38px 38px;
  z-index: 10;
  align-items: center;
  justify-items:center;
`
export const Button = styled.button`

  background-color:#502725;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-weight: 600;

`
export const DisplayEventBox = styled.div`
 max-width:500px;
 height: 200px;
 position: absolute;
 top: 50px;
 display: flex;
 flex-wrap: wrap;
 @media only screen and (max-width: 600px) {
  
}
`
export const ECards = styled.div`
  height: 135px;
  width: 144px;
  overflow: hidden;
  border-radius: 15px;
  text-align: center;
  transition: width .25s linear;
  margin-right: 15px;
  margin-top: 20px;
`
export const SecName = styled.div`
  font-size: 2.5rem;
  color: white;
  text-orientation: upright;
writing-mode: vertical-rl;
text-transform: uppercase;
font-weight: 600;
position: absolute;
top: 25%;
margin: auto -0.7rem;
@media ${device.laptop} {
  margin: auto 1rem;
}
animation-duration: 2s;
  animation-name: slidein;
@keyframes slidein {
  from {
   opacity: 0;
   display: none;
  }

  to {
    opacity: 100;
    display: block;
  }
}
`
