import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    state = {
        storeTitle: 'My Store Name'
    };
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Page storeTitle={this.state.storeTitle}>
                    <Component />
                </Page>
            </Container>
        );
    }
}

export default MyApp;
