import fetch from 'isomorphic-unfetch';

// eslint-disable-next-line
const Page = ({ data }) => <div dangerouslySetInnerHTML={{ __html: data }} />;

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`http://localhost:3000/pages/${id}`);
  const data = await res.text();
  return {
    data,
  };
};

export default Page;
