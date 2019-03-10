import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// eslint-disable-next-line
const Component = ({ pages }) => (
  <>
    <ul>
      {pages.map(id => (
        <li key={id}>
          <Link href={{ pathname: 'page', query: { id } }}>
            <a>{id}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);
Component.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/pages');
  const data = await res.json();
  return {
    pages: data,
  };
};

export default Component;
