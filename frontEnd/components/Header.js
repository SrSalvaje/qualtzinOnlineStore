import React from 'react';
import Nav from './Nav';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div>
            <div className="bar">
                <a href="">{props.storeTitle}</a>
                <Nav />
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </div>
    );
};

Header.PropTypes = {
    storeTitle: PropTypes.string
};

export default Header;
