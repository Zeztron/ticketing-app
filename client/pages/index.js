import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  // Figure out if we are on the server or browser to make the proper requests
  if (typeof window === 'undefined') {
    // We're on the server
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );

    return data;
  } else {
    // We're on the browser
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
};

export default LandingPage;
