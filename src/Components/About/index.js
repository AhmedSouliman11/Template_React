import React from 'react';
import {AboutSection,AboutInfo,InfoTitle,Span,InfoDir,InfoDesc,Anchor} from './style.js';
const About = () => {
    return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc class="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <p class="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}
export default About ;