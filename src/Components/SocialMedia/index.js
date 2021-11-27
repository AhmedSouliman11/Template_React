import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {SocialMedia,Social,Icon,SocialDesc,Span,SpanInfo} from  './style.js';
const SocialStand = () => {
    const [social , setSocial] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => setSocial(res.data.social));
    } , []);
    const SocialLoop = social.map(socialItem => {
        return (
            <Social item={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <SocialDesc>
                <Span>{socialItem.title}</Span>
                <SpanInfo>{socialItem.body}</SpanInfo>
            </SocialDesc>
        </Social>
        );
    })
    return (
        <SocialMedia> 
            {SocialLoop}

    </SocialMedia>
    );
}
export default SocialStand ;