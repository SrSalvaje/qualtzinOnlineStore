import React, { Component } from 'react';
import Header from '../Header/Header';
import Meta from '../Meta/Meta';
import PropTypes from 'prop-types';
//theme used by styled-components, it has any css values I might reuse
import theme1 from '../../global Styles/theme';
// ! Needed by styled-components to access the theme, its based on the React Context api
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// my styled components
import { StyledMainDiv, StyledInnerDiv } from './stylesPage';

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme1}>
                <StyledMainDiv>
                    <Meta storeTitle={this.props.storeTitle} />
                    <Header storeTitle={this.props.storeTitle} />
                    <p>I am everywhere</p>
                    <StyledInnerDiv>{this.props.children}</StyledInnerDiv>
                </StyledMainDiv>
            </ThemeProvider>
        );
    }
}

Page.propTypes = {
    storeTitle: PropTypes.string
};
