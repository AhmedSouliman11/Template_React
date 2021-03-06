import axios from 'axios';
import React , { useState , useEffect } from 'react';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,ImageWrapper,Image,Overlay,OverlaySpan} from './style.js';
const Portfolio = () => {
    const [ images , setImages ] = useState([]); //initialize the state images : []
    useEffect( () => {
        axios.get('js/data.json').then( res => {setImages(res.data.portfolio)} ); 
    } , [] );
    const PortfolioImages = images.map( imageItem => {
        return (
            <ImageWrapper key={imageItem.id}>
            <Image src={imageItem.image} alt="" />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWrapper>
        );
    });
    return (
        <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photo shop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>

        <div className="box">
            { PortfolioImages }
        </div>
        
    </PortfolioSection>
    )
}
export default Portfolio ;