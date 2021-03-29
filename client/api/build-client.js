import axios from 'axios';

const buildClient = ({ req }) => {
  // Figure out if we are on the server or browser to make the proper requests
  if (typeof window === 'undefined') {
    // We're on the server
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // We're on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
