import React, { Component } from 'react';
import {
    SimpleGrid,
    Heading,
    Button,
    Container
} from '@chakra-ui/react'
import NewsItem from './NewsItem';
import "../assets/css/News.css";

class News extends Component {
    static defaultProps = {
        category: 'general'
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=280fa0816b344dae8da567443c8180b6&pageSize=21`
        const jsonData = await fetch(url)
        const parseData = await jsonData.json()
        this.setState({
            articles: parseData.articles
        });
    };

    handlePreviousClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=280fa0816b344dae8da567443c8180b6&page=${this.state.page - 1}&pageSize=21`
        const jsonData = await fetch(url)
        const parseData = await jsonData.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        });
    }

    handleNextClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=280fa0816b344dae8da567443c8180b6&page=${this.state.page + 1}&pageSize=21`
        const jsonData = await fetch(url)
        const parseData = await jsonData.json()
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        });
    }

    render() {
        return (
            <>
                <Heading pt='100' className='newsHeading' as='h2' size='3xl' align='center' fontFamily="Inter" isTruncated>
                    Latest News
                </Heading>

                <SimpleGrid columns={3} spacing={10} m='150' >
                    {this.state.articles.map((element) => {
                        return (
                            <NewsItem key={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        )
                    })}
                </SimpleGrid>

                <Container display='flex' alignItems='center' justifyContent='center' pb='20'>
                    <Button mr='5' disabled={this.state.page <= 1} colorScheme='blue' variant='solid' onClick={this.handlePreviousClick}>
                        Previous
                    </Button>

                    <Button colorScheme='blue' variant='solid' onClick={this.handleNextClick}>
                        Next
                    </Button>

                </Container>


            </>
        );
    }
}

export default News