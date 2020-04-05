import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { RouteComponentProps } from 'react-router-dom';

const VERSION = gql`
  query {
    myPage
  }
`;

const MyPage: React.FC<RouteComponentProps> = props => {
  if (!props.location.state) {
    props.history.push('/');
  }

  const { loading, error, data, refetch } = useQuery(VERSION);
  useEffect(() => {
    refetch();
    return () => {};
  }, [refetch]);

  return (
    <div>
      <p>{loading || error ? 'wow' : data.myPage}</p>
    </div>
  );
};

export default MyPage;
