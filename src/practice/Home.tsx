/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
// import { RootState } from '../store/modules/index';
import { authid } from '../store/modules/auth';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import storage from '../utils/storage';
import { Route, Link } from 'react-router-dom';
import MyPage from '../practice/MyPage';
import { RouteComponentProps } from 'react-router-dom';

const LOGINME = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
    }
  }
`;
const Home: React.FC<RouteComponentProps> = ({ history }) => {
  // const currentId = useSelector((state: RootState) => state.auth.userId);
  const dispatch = useDispatch();

  const [login] = useMutation(LOGINME, {
    onCompleted({ signIn }) {
      dispatch(authid(signIn.id));
      storage.setItem('CURRENT_USER', signIn.id);
      setTimeout(() => {
        history.push({
          pathname: '/MyPage',
          state: {
            id: signIn.id,
          },
        });
      }, 1000);
    },
  });

  const plzcall = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        email: `test@naver.com`,
        password: `test1`,
      },
    });
  };

  return (
    <div>
      <Route exact path="/MyPage" component={MyPage}></Route>
      <Link to="/MyPage">MyPage</Link>

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
      <h1>Home</h1>
      <div>내 맘대로 공부</div>
    </div>
  );
};

export default Home;
