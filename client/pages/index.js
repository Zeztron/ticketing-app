const LandingPage = ({ currentUser }) => {
  return <h1>Welcome, {currentUser ? currentUser.email : 'user'}</h1>;
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default LandingPage;
