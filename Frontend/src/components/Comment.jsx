import { useState } from "react";
import { Flex, Avatar, Text, Divider } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
const Comment = ({ comment, createdAt, likes, username, userAvatar }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w="full">
        <Avatar src={userAvatar} size="sm"></Avatar>
        <Flex flexDirection={"column"} gap={1} w={"full"}>
          <Flex w="full" justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text color="gray.light" fontSize={"sm"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Actions liked={liked} setLiked={setLiked} />{" "}
          <Text color="gray.light" fontSize={"sm"}>
            {likes + (liked ? 1 : 0)} Likes
          </Text>
        </Flex>
      </Flex>
      <Divider my={4} />
    </>
  );
};

export default Comment;
