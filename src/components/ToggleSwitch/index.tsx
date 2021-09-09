import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface ToggleSwitchProps {
  children: string[];
}

export const ToggleSwitch = ({ children }: ToggleSwitchProps) => {
  const [isLeft, setIsLeft] = useState(true);
  const [position, setPosition] = useState("");
  const [option, setOption] = useState(children[0]);
  const handleMovement = () => {
    setIsLeft(!isLeft);
    setPosition(isLeft ? "0%" : "43%");
    setOption(isLeft ? children[0] : children[1]);
  };
  return (
    <>
      <Box
        width="264px"
        borderRadius="50px"
        h="40px"
        boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25);"
        position="relative"
      >
        <HStack w="100%" h="100%">
          <Flex w="50%" h="100%" justifyContent="center" alignItems="center">
            <Text as="label">{children[0]}</Text>
          </Flex>
          <Flex w="50%" h="100%" justifyContent="center" alignItems="center">
            <Text as="label">{children[1]}</Text>
          </Flex>
          <Flex
            as="span"
            position="absolute"
            left={position}
            w="50%"
            h="90%"
            bg="green.300"
            borderRadius="50px"
            justifyContent="center"
            alignItems="center"
            onClick={handleMovement}
            transition="ease .5s"
          >
            <Text color="white" fontWeight="bold">
              {option}
            </Text>
          </Flex>
        </HStack>
      </Box>
    </>
  );
};
