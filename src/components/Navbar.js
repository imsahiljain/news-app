import React from 'react';
import {
    Flex,
    Spacer,
    Box,
    Button,
    Heading,
    useColorMode,
    Link
} from '@chakra-ui/react'
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Flex boxShadow='md' rounded='md'>
                <Box p='2' m='4'>
                    <Heading fontFamily="Inter" fontSize='2xl'>News App</Heading>
                </Box>
                <Spacer />
                <Box m='5'>
                    <Button mr='4' colorScheme='black' variant='ghost'>
                        <Link>Sports</Link>
                    </Button>
                    <Button mr='4' colorScheme='black' variant='ghost'>
                        <Link>Tech</Link>
                    </Button>
                    <Button mr='4' colorScheme='black' variant='ghost'>
                        <Link>Business</Link>
                    </Button>
                    <Button mr='4' colorScheme='black' variant='ghost'>
                        <Link>Entertainment</Link>
                    </Button>

                    <IconButton mr='4' aria-label="Toggle Mode" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </IconButton>
                </Box>
            </Flex>
        </>
    );
};

export default Navbar