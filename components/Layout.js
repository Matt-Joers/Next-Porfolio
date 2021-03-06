import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({children, title}) => (
  <div className='root'>
    <Head>
    <title>NextPortfolio</title>
    </Head>
    <header>
      <Link href='/'><a>HOME</a></Link>
      <Link href='/about'><a>ABOUT</a></Link>
      <Link href='/hireme'><a>HIRE ME</a></Link>
      <Link href='/blog'><a>BLOG</a></Link>
    
    </header>
    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>
    <style global jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
        font-family: arial;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}
    </style>
   
  </div>
);
