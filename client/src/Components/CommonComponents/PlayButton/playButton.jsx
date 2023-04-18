import { Center, Square, Circle, Icon, HStack, Box } from "@chakra-ui/react";
import { RxTriangleRight } from "react-icons/rx";

import { CgPlayPause } from "react-icons/cg";
import { useState } from "react";
import LikeAnimation from "../LikeAnimation/LikeAnimation";

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaybtn = () => {
    setIsPlaying(!isPlaying);
  };

  const btnStyle = {
    cursor: "pointer",
  };

  return (
    <HStack>
      <Circle
        style={btnStyle}
        size="60px"
        pos="relative"
        left="10px"
        color="#000000"
        onClick={handlePlaybtn}
        bg="#1ed760"
      >
        <Icon boxSize={12} as={isPlaying ? CgPlayPause : RxTriangleRight} />
      </Circle>

    </HStack>
  );
};

export default PlayButton;
