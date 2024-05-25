import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Pagination } from "swiper/modules";

export default function Slider() {
    return (
        <Container
            sx={{
                // mt:2.5
                display: "flex",
            }}
        >
            {/* slider in mui + swiperjs : https://swiperjs.com/react */}
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src=".\images\bg7104.jpg" alt="" />
                    <Box
                        sx={{ position: "absolute", right: "10%" }}
                        className="bordertt"
                    >
                        <Typography sx={{ color: "#222" }} variant="h5">
                            Latsete Project
                        </Typography>
                        <Typography
                            sx={{ color: "#222", fontWeight: 400, my: 1 }}
                            variant="h3"
                        >
                            Nawara
                        </Typography>

                        <Stack
                            sx={{ justifyContent: "center" }}
                            direction={"row"}
                            alignItems={"center"}
                        >
                            <Typography sx={{ color: "#333" }} variant="h4">
                                Handmade candel  
                            </Typography>
                            <Typography
                                sx={{ color: "#cccc00", ml: 1 }}
                                variant="h4"
                            >
                                webdshop
                            </Typography>
                        </Stack>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".\images\bg7073.jpg" alt="" />
                </SwiperSlide>
            </Swiper>

            <Box sx={{ width: "30%", margin: "10px" }}>Vertical slider</Box>
        </Container>
    );
}
