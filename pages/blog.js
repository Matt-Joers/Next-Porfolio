import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({slug, title}) => (
  <li>
  <Link as={`${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link> 
  </li>
);

export default () => (
<Layout title='My Blog'>
  <ul>
    <PostLink slug='React-Post'title='React'/>
    <PostLink slug='CSS-Post' title='CSS'/>
    <PostLink slug='React-Native-Post' title='React Native'/>
  </ul>
</Layout>

)