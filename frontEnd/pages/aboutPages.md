# The pages dir

This directory holds the different views/top level pages, i.e home, orders, my account etc. The following files should be at the root of the directory (no nested directories).

-   index.js = "home"
-   \_app.js=
-   \_document.js=

## Why custom `_app.js`?

Next.js by default wraps the application in an `<App>`component, overriding allows us to:

-   Persisting layout between page changes
-   Keeping state when navigating pages
-   Custom error handling using componentDidCatch
-   Inject additional data into pages (for example by processing GraphQL queries)

To override, create the ./pages/\_app.js file and override the App class as shown below:

```js
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
```
