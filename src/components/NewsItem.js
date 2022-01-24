import React, { Component } from 'react';
import {
    Box,
    Image,
    Button,
    Link
} from '@chakra-ui/react'


class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <Box boxShadow='2xl' rounded='md' border='1px' borderColor='gray.200' width='450px' height='auto'>
                <Image src={imageUrl} alt="Image" width='auto-fit' />
                <Box p='6'>
                    <Box mt='1' fontWeight='semibold' fontSize='xl' lineHeight='tight' isTruncated>
                        {title}...
                    </Box>
                    <Box>
                        {description}...
                    </Box>
                    <br />
                    <Button colorScheme='blue'>
                        <Link href={newsUrl}>Read more</Link>
                    </Button>
                </Box>
            </Box>
        );
    }
}

export default NewsItem