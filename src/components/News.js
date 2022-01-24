import React, { Component } from 'react';
import {
    SimpleGrid,
    Heading
} from '@chakra-ui/react'
import NewsItem from './NewsItem';
import "../assets/css/News.css";


class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=280fa0816b344dae8da567443c8180b6"
        const jsonData = await fetch(url)
        const parseData = await jsonData.json()
        this.setState({
            articles: parseData.articles
        })
    }
    
    render() {
        return (
            <>
                <Heading className='newsHeading' as='h2' size='3xl' align='center' fontFamily="Inter" isTruncated>
                    Latest News
                </Heading>

                <SimpleGrid columns={3} spacing={10} m='150' >
                    {this.state.articles.map((element) => {
                        return (
                            <NewsItem key={element.url} title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        )
                    })}
                </SimpleGrid>

            </>
        );
    }
}

export default News