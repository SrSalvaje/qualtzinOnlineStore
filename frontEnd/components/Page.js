import React, { Component } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

export default class Page extends Component {
    render() {
        return (
            <div>
                <Header storeTitle={this.props.storeTitle} />
                {this.props.children}
            </div>
        );
    }
}

Page.PropTypes = {
    storeTitle: PropTypes.string
};
