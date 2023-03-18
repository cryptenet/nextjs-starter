import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    static override async getInitialProps(ctx: any) {
        try {
            const initialProps = await NextDocument.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {/* Stitches CSS for SSR */}
                    </>
                ),
            };
            // eslint-disable-next-line no-empty
        } finally {
        }
    }

    override render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/images/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
