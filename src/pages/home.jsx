import { Avatar, Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"
import { useState,useRef } from "react"

export const Homepage = () => {
    const [move,setMove] = useState(false)
    const [text,setText] = useState(0)
    const input = useRef()


    const onClick = () => {
        setMove(true)
        setText(input.current.value)
    }


    return move ? (<Navigate to="/list" state={text}/>) //---Komponen navigate dari react router DOM
            : (
        <>
        <Box border={"2px solid black"} justifyContent={"center"} textAlign={"center"} w={"60vw"} bgColor={""}>
            <Heading pb={"50px"}>ChitCHat - Express Your Feeling</Heading>
            <Flex>
                <Avatar />
            <Input type={"text"} placeholder="Whats on your mind" ref={input}>
            </Input>
                <Button onClick={onClick} bg={"lightskyblue"} borderColor={"red"}>
                Send
                </Button>
            </Flex>
        </Box>
        </>
    )
}