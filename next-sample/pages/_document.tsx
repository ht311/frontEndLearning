import Document,{ DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// デフォルトのDocumentをMyDocumentで上書き
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initailProps = await Document.getInitialProps(ctx)
            return {
                ...initailProps,
                stylis:[
                    // もともとのstyle
                    initailProps.styles,
                    // styled*componentsのstyle
                    sheet.getStyleElement()
                ]
            }
        } finally{
            sheet.seal()
        }
    }
} 
