import { Avatar, Box, Flex, Heading, Input } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"

export const ListChat = () => {
    const location = useLocation() //--- useLocation dari router dom
    console.log(location);
    return(
        <>
        <Box border={"2px solid black"} justifyContent={"center"} textAlign={"center"} w={"60vw"} bgColor={""}>
            <Heading pb={"50px"}>ChitCHat - Express Your Feeling</Heading>
            <Flex>
                <Avatar />
            <Input type={"text"} value={location.state}>
            </Input>
            </Flex>
        </Box>
        </>
    )
}