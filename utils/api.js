import Config from 'react-native-config';

Config.REACT_NATIVE_FIREBASE_KEY;

export const getBio = username => {
  username = username.toLowerCase().trim();
  const url = `http://api.github.com/users/${username}`;
  return fetch(url).then(res => res.json());
};

export const getRepos = username => {
  username = username.toLowerCase().trim();
  const url = `http://api.github.com/users/${username}/repos`;
  return fetch(url).then(res => res.json());
};

export const getNotes = username => {
  username = username.toLowerCase().trim();
  const url = `https://github-saver-8f0b4.firebaseio.com/${username}.json?auth=${
    Config.REACT_NATIVE_FIREBASE_KEY
  }`;
  // const url = `https://github-saver-8f0b4.firebaseio.com/${username}.json?auth=${REACT_NATIVE_FIREBASE_KEY}`;

  return fetch(url).then(res => res.json());
};

export const addNote = (username, note) => {
  username = username.toLowerCase().trim();
  const url = `https://github-saver-8f0b4.firebaseio.com/${username}.json?auth=${
    Config.REACT_NATIVE_FIREBASE_KEY
  }`;
  // const url = `https://github-saver-8f0b4.firebaseio.com/${username}.json?auth=${REACT_NATIVE_FIREBASE_KEY}`;
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(note)
  }).then(res => res.json());
};
