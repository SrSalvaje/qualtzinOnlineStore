import Nav from '../Nav/Nav';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = props => (
    <div>
        <div className="bar">
            <Link href="/">
                <a>{props.storeTitle}</a>
            </Link>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </div>
);

Header.propTypes = {
    storeTitle: PropTypes.string
};

export default Header;
