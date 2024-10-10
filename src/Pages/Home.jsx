import { Box, Container} from '@mui/material'
import React from 'react'
import '../App.css';
import Hero from '../Images/Hero.jpg'
import PngF from '../Images/Pngf.png'
import PngS from '../Images/PngS.png'
import HeroS from '../Images/HeroS.jpg'
import HeroT from '../Images/groom1.jpg'
import AbtF from '../Images/AbtS.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <Box>
      <Box className="slick-arrow">
          <Slider {...settings} >
            <div>
              <img src={Hero} width={"100%"} height={"500px"}/>
              <Box sx={{display:'flex', justifyContent:'center', }}>
                <Box sx={{position:'absolute', top:'0px',paddingTop:{lg:'220px', md:'230px', sm:'234px',xs:'242px'}, color:'#ffffff',fontSize:{lg:'40px',md:'34px',sm:'22px',xs:'16px'},letterSpacing:'3px', wordSpacing:'3px', fontWeight:'600px', fontFamily:'"Prosto One", system-ui'}}>Capturing Unique Rituals and Styles</Box>
                <Box sx={{position:'absolute', top:'0px',fontSize:{xs:'16px'},paddingTop:{lg:'278px',md:'268px', sm:'268px', xs:'262px'}, color:'#ffffff'}}>Lightweight and Flowy, great for Comfort</Box>
              </Box>
            </div>
            <div>
              <img src={HeroS} width={"100%"} height={"500px"}/>
              <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{position:'absolute', top:'0px',paddingTop:{lg:'220px', md:'230px', sm:'234px',xs:'242px'}, color:'#ffffff',fontSize:{lg:'40px',md:'34px',sm:'22px',xs:'16px'},letterSpacing:'3px', wordSpacing:'3px', fontWeight:'600px', fontFamily:'"Prosto One", system-ui'}}>A Fusion of Unique Rituals</Box>
                <Box sx={{position:'absolute', top:'0px',fontSize:{xs:'16px'},paddingTop:{lg:'278px',md:'268px', sm:'268px', xs:'262px'}, color:'#ffffff'}}>Discover Comfort That Dances with You</Box>
              </Box>
            </div>
            <div>
              <img src={HeroT} width={"100%"} height={"500px"}/>
              <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{position:'absolute', top:'0px',paddingTop:{lg:'220px', md:'230px', sm:'234px',xs:'242px'}, color:'#ffffff',fontSize:{lg:'40px',md:'34px',sm:'22px',xs:'16px'},letterSpacing:'3px', wordSpacing:'3px', fontWeight:'600px', fontFamily:'"Prosto One", system-ui'}}>Where Tradition Meets Trend</Box>
                <Box sx={{position:'absolute', top:'0px',fontSize:{xs:'16px'},paddingTop:{lg:'278px',md:'268px', sm:'268px', xs:'262px'}, color:'#ffffff'}}>Airy and Adaptable Comfort Meets Style in Every Step</Box>
              </Box>
            </div>
        </Slider>
      </Box>
      <Box sx={{mt:'100px', position:'relative'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center',  fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight:'600', textTransform: 'uppercase',fontFamily:'"Prosto One", system-ui', color: '#383838', my: { lg: '25px', md: '10px', sm: 'auto', } }} >about us</Box>
        <Box sx={{position:'absolute', top:'-65px'}}>
          <img src={PngF} />
        </Box>
        <Box sx={{position:'absolute', top:'-10px', right:'0px'}}>
          <img src={PngS} width={"250px"} height={"280px"} />
        </Box>
      </Box>
      <Box>
        <Container sx={{display:'flex', marginTop:'46px'}}>
          <Box className='img'>
            <img src={AbtF}/>
          </Box>
          <Box sx={{width:'50%',marginLeft:'28px', py:'170px'}}>
            <Box sx={{fontSize:'49px', fontWeight:'600',fontFamily:'"Prosto One", system-ui',color:'#E65E5A'}}>
              We Belive In A Bridal Revolution
            </Box>
            <Box sx={{fontSize:'20px', mt:'30px'}}>
                We don’t think bridal should be uncomfortable or kept in a box. We don’t think you should be pressured into not feeling like yourself. Our dresses are unusual, figure flattering and above all comfortable. They are made to stand out in the bridal world and to make your guests salute you for being you.
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
export default Home