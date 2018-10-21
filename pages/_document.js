import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App { ...props } />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400" rel="stylesheet" />

          { this.props.styleTags }          
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    );
  }
}
