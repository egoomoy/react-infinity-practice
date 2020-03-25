import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const VERSION = gql`
  query {
    me
  }
`;

const LOGINME = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      ok
      error
    }
  }
`;

function Home() {
  const [login] = useMutation(LOGINME, {
    onCompleted({ signIn }) {
      const { ok, error } = signIn;
      if (ok === false) {
        console.log(error);
      } else if (ok) {
        console.log('ok');
        return;
      }
    },
  });

  const plzcall = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        email: `test@naver.com`,
        password: `test`,
      },
    });
  };

  const { loading, error, data } = useQuery(VERSION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <label>
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <label>
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit" onClick={plzcall}>
        Login
      </button>

      <p>{data.me}</p>
      <h1>Home</h1>
      <div>내 맘대로 공부</div>
    </div>
  );
}

export default Home;
