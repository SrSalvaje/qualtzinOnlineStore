import App, { Container } from 'next/app';

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <p>I show everywhere</p>
                <Component />
            </Container>
        );
    }
}

export default MyApp;
