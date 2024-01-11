import {Box, Flex, Icon, Text} from "@chakra-ui/react";
import {FaBars} from "react-icons/fa";
import {Outlet} from "react-router-dom";

function Header() {
  return (
    <>
      <Flex h='64px' w='100vw' p='16px' background='#00000077' alignItems='center'>
        <Box>
          <Text>Logo</Text>
        </Box>
        <Flex ml={'auto'} alignItems='center'>
          <Icon as={FaBars} mr='8px' />
          <Text>Menu</Text>
        </Flex>
      </Flex>
      <Outlet />
    </>
  )
}

export default Header;
