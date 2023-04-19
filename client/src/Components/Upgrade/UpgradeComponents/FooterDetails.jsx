import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const FooterDetails = ({ ele }) => {
	return (
		<Box>
			{Object.keys(ele).map((a, i) => {
				{
					if (alert === "title") {
						return (
							<Text key={i} fontWeight="bold" color="gray">
								{ele[a]}
							</Text>
						);
					} else {
						return (
							<Box
								key={i}
								my="20px"
								fontSize="16px"
								_hover={{ color: "#1ED760" }}
							>
								<Link decoration="none">{ele[a]}</Link>
							</Box>
						);
					}
				}
			})}
		</Box>
	);
};

export default FooterDetails;
