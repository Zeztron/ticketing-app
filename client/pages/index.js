import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return <h1>Welcome, {currentUser ? currentUser.email : 'user'}</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const apiClient = buildClient(context);
  const { data } = await apiClient.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
