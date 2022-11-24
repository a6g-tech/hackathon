import React from "react";
import { ConnectKitButton } from "connectkit";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import ProfileCard from "./ui/profileCard";

export const Layout = () => {
  return (
    <Flex flexDir={"column"}>
      <Flex>
        <ConnectKitButton.Custom>
          {({ isConnected, show, truncatedAddress, ensName }) =>
            isConnected ? (
              <Button onClick={show}>
                <Flex gap={"1rem"} align="center">
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    {ensName ?? truncatedAddress}
                  </Text>
                </Flex>
              </Button>
            ) : (
              <Button
                flex={1}
                maxW={"fit-content"}
                justifySelf={"flex-end"}
                onClick={show}
              >
                Connect
              </Button>
            )
          }
        </ConnectKitButton.Custom>
      </Flex>
      <Flex flexDir={"column"} gap="small">
        <Heading as="h1">w3meta</Heading>
        <Heading as="h2">web3 citizen meta profile</Heading>
      </Flex>
      <Flex>
        <ProfileCard />
      </Flex>
    </Flex>
  );
};

export default Layout;
