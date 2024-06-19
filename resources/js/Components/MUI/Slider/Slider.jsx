import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Pagination } from "swiper/modules";
import Verticalslider from "./Verticalslider";

export default function Slider() {
    return (
        <Container
            sx={{
                display: "flex",
                height: "60vh",
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
                    <img src=".\images\bg7073.jpg" alt="" />
                    <Box
                        sx={{
                            position: "absolute",
                            left: "5%",
                            textAlign: "left",
                        }}
                        className="bordertt"
                    >
                        <Typography sx={{ color: "#222" }} variant="h5">
                            Latest Project
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
                                Handmade bags
                            </Typography>
                            <Typography
                                sx={{ color: "#ffc8dd", ml: 1 }}
                                variant="h4"
                            >
                                webdshop
                            </Typography>
                        </Stack>

                        <Button
                            sx={{
                                px: 5,
                                py: 1,
                                mt: 2,
                                backgroundColor: "#222",
                                boxShadow: "0 4px 16px rgba(43, 52, 69, 0.1)",
                                color: "#fff",
                                borderRadius: "1px",
                                "&:hover": {
                                    bgcolor: "#151515",
                                },
                            }}
                        >
                            Go to webshop
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".\images\bg7104.jpg" alt="" />
                </SwiperSlide>
            </Swiper>

            <Box sx={{ width: "30%", mx: 1 }}>
                <Verticalslider />
            </Box>
        </Container>
    );
}
