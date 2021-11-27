import React , { useState , useEffect }from 'react';
import axios from 'axios';
import {ProfileSkills,ProfileStyle,ProfileList,ProfileItem,ProfSpan,Skills,SkillsDesc,SkillBar,BarTitle,BarParent,BarSpan,Title,Span,ParentSpan} from './style.js';
const Profile = () => {
    const [Bars , setBars] = useState([]); //initialize Bras = []
    useEffect(() => {
        axios.get('js/data.json').then(res => setBars(res.data.profile));
    } , [] );
    const ProfileBars = Bars.map( Bar => {
        return (
            <SkillBar key={Bar.id}>
            <BarTitle>{Bar.title}</BarTitle>
            <BarSpan>{Bar.rating}</BarSpan>
            <BarParent>
                <ParentSpan sp={Bar.id}></ParentSpan>
            </BarParent>
        </SkillBar>
        );
    })
    return (
        <ProfileSkills> 
        <div class="container">
            <ProfileStyle>
                <Title><Span>My </Span>Profile</Title>
                <ProfileList>
                    <ProfileItem>
                        <ProfSpan>Name</ProfSpan>
                        Hamza Nabil
                    </ProfileItem>
                    <ProfileItem>
                        <ProfSpan>Birthday</ProfSpan>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem >
                        <ProfSpan>Address</ProfSpan>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem>
                        <ProfSpan>Phone</ProfSpan>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <ProfSpan>Email</ProfSpan>
                        hamza@hamza.com
                    </ProfileItem>
                    <ProfileItem >
                        <ProfSpan>Website</ProfSpan>
                        <ProfSpan web>www.google.com</ProfSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileStyle>
            
            <Skills>
                <Title>Some <Span>skills</Span></Title>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                { ProfileBars }
            </Skills>
            
        </div>
    </ProfileSkills>
    )
}
export default Profile ;