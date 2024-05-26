import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import BasicPie from "../chart/BasicPie";

export default function Verticalslider() {
    return (
        <>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box>
                        <BasicPie />
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box sx={{ color: "#222" }}>
                        <Typography
                            sx={{ color: "#222", fontWeight: 400, my: 1 }}
                            variant="h3"
                        >
                            Laravel and ReactJs
                        </Typography>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
