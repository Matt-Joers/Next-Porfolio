import Layout from '../components/Layout';
import { Component } from 'React';
import Error from './_error';
import fetch from 'isomorphic-unfetch';
export default class About extends Component {

static async getInitialProps() {
  const res = await fetch('https://api.github.com/users/relicdude36')
  const statusCode = res.status > 200 ? res.status : false; 
  const data = await res.json();
  return { user: data, statusCode};
}

  render() {
    const { user, statusCode } = this.props;

    if(statusCode) {
      return <Error statusCode={statusCode} />
    }
    return(
        <Layout title='About'>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="me" height="200px"/>
          <p>{user.bio}</p>
          
        </Layout>
      );
  }
}
