import React from 'react'
import Card from '@mui/material/Card';
import PngF from '../Images/Pngf.png'
import PngS from '../Images/PngS.png'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../animation';
import About from '../Images/About.jpg'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <>

      <Box>
        <Container>
          <Box sx={{position:'relative', textAlign:'center', borderRadius:'10px'}}>
            <img src={About} alt=""width={"100%"} style={{borderRadius:'10px'}} />
            <Box sx={{position:'absolute', top:'0px', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight:'600', textTransform: 'uppercase',fontFamily:'"Prosto One", system-ui', color:'white',width:'100%',my:'20px'}}>About Us</Box>
            <Box sx={{position:'absolute', bottom:'10px', color:'white', fontSize:'24px'}}>
              Welcome to Culture Studio, where tradition meets contemporary style! Established in 2024, our mission is to celebrate the richness of both Western and traditional cultures through our carefully curated clothing rental service.
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{mb:'40px'}}>
        <Box sx={{ my: { lg: '25px', md: '10px', sm: 'auto', } }}>
          <Box sx={{textAlign:'center', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight:'600', textTransform: 'uppercase',fontFamily:'"Prosto One", system-ui'}}>Custmization</Box>
        </Box>
        <Box sx={{position:'absolute', top:'30px'}}>
          <img src={PngF} />
        </Box>
        <Box sx={{position:'absolute', top:'65px', right:'0px'}}>
          <img src={PngS} width={"250px"} height={"280px"} />
        </Box>
        <Container>

        <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'space-around'}}>

          <Card sx={{ maxWidth: 345 ,width:'24%'}} className='Animate'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              image="https://im.whatshot.in/img/2018/Jun/muskan-1528307202.jpg?wp=1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{color:'#dd1a18' ,textAlign:'center'}}>
                Choose Your Febric
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Select from a variety of high-quality fabrics, including cotton, linen, silk, and more, to suit your preferences and the occasion.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,width:'24%'}} className='Animate'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              image="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Techniques_of_Tailoring_1024x1024.jpg?v=1721293802"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{color:'#dd1a18' ,textAlign:'center'}} >
              Customize the Fit
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Our expert tailors can adjust the fit of your garment to ensure a perfect silhouette that complements your body shape.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,width:'24%'}} className='Animate'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              image="https://i.etsystatic.com/7803375/r/il/f56a0f/2496827625/il_570xN.2496827625_pvwx.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"  style={{color:'#dd1a18' ,textAlign:'center'}}>
              Choose Your Color 
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Select your favorite color or combination of colors to create a truly one-of-a-kind piece.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,width:'24%'}} className='Animate'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              image="https://i.pinimg.com/236x/98/e4/a6/98e4a63f632e19135285933a2f7f0087.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"  style={{color:'#dd1a18' ,textAlign:'center'}}>
              Design Your Own Pattern
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Work with our design team to create a custom pattern that is uniquely yours.
              </Typography>
            </CardContent>
          </Card>
          </Box>
        </Container>
      </Box>
      <Box  sx={{textAlign:'center', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight:'600', textTransform: 'uppercase',fontFamily:'"Prosto One", system-ui'}}>Vision</Box>
      <Box>
        <Container>
          <Box>
            At Culture Studio, we believe that fashion is a powerful form of expression. We aim to provide a platform that not only showcases diverse cultural heritage but also offers sustainable options for those who wish to experience a variety of styles without the commitment of purchase.
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AboutUs