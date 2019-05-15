import App, { Container } from 'next/app';
import Page from '../components/Page/Page';

class MyApp extends App {
    // From the docs, needed to make a custom <App>
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    // * Here is State
    state = {
        storeTitle: 'My Store Name'
    };

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Page storeTitle={this.state.storeTitle}>
                    <Component {...pageProps} />
                </Page>
            </Container>
        );
    }
}

export default MyApp;
