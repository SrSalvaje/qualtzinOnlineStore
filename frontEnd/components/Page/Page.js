import React, { Component } from 'react';
import PropTypes from 'prop-types';
// ! Needed by styled-components to access the theme, its based on the React Context api
import { ThemeProvider } from 'styled-components';
// my styled components
import { StyledMainDiv, StyledInnerDiv } from './stylesPage';
import GlobalStyle from '../../global Styles/globalStyle';
//theme used by styled-components, it has any css values I might reuse
import theme1 from '../../global Styles/theme';
// components
import Meta from '../Meta/Meta';
import Header from '../Header/Header';

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme1}>
                {/*need it in order to add GlobalStyle*/}
                <React.Fragment>
                    <StyledMainDiv>
                        <Meta storeTitle={this.props.storeTitle} />
                        <Header storeTitle={this.props.storeTitle} />
                        <p>I am everywhere</p>
                        <StyledInnerDiv>{this.props.children}</StyledInnerDiv>
                    </StyledMainDiv>
                    <GlobalStyle />
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

Page.propTypes = {
    storeTitle: PropTypes.string
};
