import React, { Component } from 'react';
import Header from '../Header/Header';
import Meta from '../Meta/Meta';
import PropTypes from 'prop-types';

export default class Page extends Component {
    render() {
        return (
            <div>
                <Meta storeTitle={this.props.storeTitle} />
                <Header storeTitle={this.props.storeTitle} />
                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    storeTitle: PropTypes.string
};