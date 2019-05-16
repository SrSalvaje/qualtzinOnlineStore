import Nav from '../Nav/Nav';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Logo, StyledHeader } from './stylesHeader';
import theme1 from '../../global Styles/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const Header = props => (
    <ThemeProvider theme={theme1}>
        <StyledHeader>
            <div className="bar">
                <Logo>
                    <Link href="/">
                        <a>{props.storeTitle}</a>
                    </Link>
                </Logo>
                <Nav />
            </div>
            <div className="search-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </StyledHeader>
    </ThemeProvider>
);

Header.propTypes = {
    storeTitle: PropTypes.string
};

export default Header;
