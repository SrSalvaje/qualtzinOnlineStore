import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = props => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/debit-card.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

        <title>{props.storeTitle}</title>
    </Head>
);

Meta.propTypes = {
    storeTitle: PropTypes.string
};

export default Meta;
