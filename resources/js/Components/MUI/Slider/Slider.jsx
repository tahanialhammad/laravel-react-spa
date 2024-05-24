import { Box, Container } from '@mui/material'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


 import './style.css';

import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
     <Container sx={{
       // mt:2.5
     }}>   

     {/* slider in mui + swiperjs : https://swiperjs.com/react */}
     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<img src=".\images\programmer1.jpg" alt="" />


        </SwiperSlide>
        <SwiperSlide>
        <img src=".\images\programmer2.jpg" alt="" />
        </SwiperSlide>
    
      </Swiper>
      
     </Container>
  )
}
