import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

// styled-componentsをSSRでも有効にする
export default class MyDocment extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initalProps = await Document.getInitialProps(ctx)

            return {
                ...initalProps,
                styles: [
                    <>
                        {initalProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ]
            }

        } finally {
            sheet.seal()
        }
    }
}