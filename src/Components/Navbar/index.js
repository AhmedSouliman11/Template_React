import React from 'react';
import { NavbarSection, Logo, LogoText , UlList, ListItem, Anchor , NavItem} from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>
            
            <div className="container">
                
                    <Logo>
                        <LogoText>Ultra Profile</LogoText>
                    </Logo>
                
                    <UlList>
                        <ListItem className="list-item"><NavItem to="/">Home</NavItem></ListItem>
                        <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                        <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                        <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                        <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                        <ListItem className="list-item"><NavItem to="/contact">Contact</NavItem></ListItem>
                    </UlList>
                
            </div>  
        </NavbarSection>
    )
}
export default Navbar ;