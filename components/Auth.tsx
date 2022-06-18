import React, { useEffect, useState } from 'react';

const loginUrl: string = `${process.env.spotify_auth_endpoint}?client_id=${process.env.spotify_client_id}&redirect_uri=${process.env.spotify_redirect_uri}&response_type=${process.env.spotify_response_type}`;

const Auth: React.FC = () => {
  const [token, setToken] = useState<String>('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem;
  }, []);

  return <a href={loginUrl}>Login to Spotify</a>;
};

export default Auth;
