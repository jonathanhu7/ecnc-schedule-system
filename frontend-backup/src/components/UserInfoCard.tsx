import {
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Avatar from "../assets/avatar.jpg";
import { useAuth } from "../hooks/useAuth";
import { privilegeRoleTable } from "../types/User";

const UserInfoCard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center" borderTop="1px" pt={5} borderColor="gray.400">
          <Image src={Avatar} borderRadius="full" boxSize="45px" />
          <Box ml={3} textAlign="left">
            <Heading fontSize="20px">{currentUser?.name}</Heading>
            <Text textColor="gray.500">
              {currentUser?.username} (
              {currentUser && privilegeRoleTable[currentUser.privilege]})
            </Text>
          </Box>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={logout}>登出</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserInfoCard;