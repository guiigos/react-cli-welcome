'use strict';

const React = require('react');
const importJsx = require('import-jsx');
const axios = require('axios');
const Header = importJsx('./components/Header');
const Result = importJsx('./components/Result');
const Loading = importJsx('./components/Loading');

const { useEffect, useState } = React;

const App = ({ user = 'guiigos' }) => {
  const [name, setName] = useState();
  const [repoitories, setRepoitories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const users = axios.get(`https://api.github.com/users/${user}`);
    const repos = axios.get(`https://api.github.com/users/${user}/repos`)

    Promise.all([users, repos])
      .then(([responseUsers, responseRepos]) => {
        setName(responseUsers.data.name);
        setRepoitories(responseRepos);

        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Header user={user} />

      {loading
        ? <Loading />
        : <Result name={name} repoitories={repoitories} />
      }
    </>
  );
}

module.exports = App;
