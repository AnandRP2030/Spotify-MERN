import React from "react";
import { SimpleGrid, Center, Grid, Box } from "@chakra-ui/react";
import PowerSecCard from "./PowerSecCard";

const PowerSection = () => {
	const cards = [
		{
			img: "https://i.scdn.co/image/ab671c3d0000f4300e79e20edd40577fabe5e126",
			text1: "Ad-free music listening",
			text2: "Enjoy uninterrupted music.",
		},
		{
			img: "https://i.scdn.co/image/ab671c3d0000f430dc1baa0957b0520c556c86b7",
			text1: "Offline playback",
			text2: "Save your data by listening offline.",
		},
		{
			img: "https://i.scdn.co/image/ab671c3d0000f430d6fee826d3ece1216e4f5772",
			text1: "Play everywhere",
			text2: "Listen on your speakers, TV, and other favorite devices.",
		},
		{
			img: "https://i.scdn.co/image/ab671c3d0000f4309977c2dc20e8cd1aaf755ba2",
			text1: "Pay your way",
			text2: "Prepay with Paytm, UPI, and more.",
		},
	];
	return (
		<Box h={{ base: "780", lg: "590px" }}>
			<Center
				fontSize={{ base: "28px", lg: "40px" }}
				fontWeight="bold"
				my="75px"
			>
				The power of Premium
			</Center>
			<SimpleGrid
				columns={{ base: 1, lg: 2, xl: 4 }}
				gap={2}
				maxW="container.xl"
				m={{ base: "0", md: "auto" }}
			>
				{cards.map(({ img, text1, text2 }) => {
					return (
						<PowerSecCard img={img} text1={text1} text2={text2} />
					);
				})}
			</SimpleGrid>
		</Box>
	);
};

export default PowerSection;
