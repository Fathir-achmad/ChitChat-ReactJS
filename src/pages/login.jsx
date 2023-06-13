import { Button, Card, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import  { useState } from "react"

export const PasswordInput = () => {
    const [show, setShow] = useState(0)
    const handleClick = () => setShow(!show)
  
    return (
        <>
        <Card border={"2px solid black"} borderColor={"black"} bgColor={"#557c93"} margin={" 10% 30%"}>

        <Flex justifyContent={"center"} pb={"20px"} pt={"50px"} alignItems={"center"}>
            <Input w={"30%"} type="text" pr={"4.5 rem"} placeholder='Username or email' _placeholder={{color:"red.500"}}></Input>
        </Flex>
        
        <Flex>
    <InputGroup size='md' w={"100%"} justifyContent={"center"}>
        <Input
        w={"30%"}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        />
        <InputRightElement width='4.5rem' pr={"200px"}>
        <Button h='1.75rem'  size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
        </Button>
        </InputRightElement>
    </InputGroup>
        </Flex>
        <Flex pt={"50px"} mb={"50px"} justifyContent={"center"}>
            <Button>
                LOGIN
            </Button>
        </Flex>
        </Card>

        </>
    )
  }