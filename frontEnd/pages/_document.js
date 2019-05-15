// * This is hidden by default, we need to customize it in order to allow styled-components to do SSR correctly

import Document, { Head, Main, NextScript } from 'next/document';
//  Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
//  https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c
