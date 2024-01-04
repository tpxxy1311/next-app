import Header from './components/header/header'
import './styles.css'
import './global.css'
import Footer from './components/footer/footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/media/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}


