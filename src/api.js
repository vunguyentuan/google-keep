const BASE_URL = 'https://google-keep.herokuapp.com/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsImlhdCI6MTUwMDEwNTQ1NCwiZXhwIjoxNTAwMTA5MDU0fQ.uXs_vgSMaLwlpeKh1jB7lnYJ2Gkw8draoMM_F6ik1ZY';

/**
 * {
    "username": "vunguyen",
    "email": "tuanvu.vn007@gmail.com",
    "password": "123456"
  }
 */
export const getData = () => {
  // `${BASE_URL}/notes}`
  // BASE_URL + '/notes'

  return fetch(`${BASE_URL}/notes?token=${TOKEN}`).then(response => {
    if (!response.ok) {
      throw new Error('cannot fetch data');
    }

    return response.json();
  });
}

export const getMovies = () => {
  // `${BASE_URL}/notes}`
  // BASE_URL + '/notes'

  return fetch('https://feed.entertainment.tv.theplatform.com/f/NIi3EC/foxplus_pa?byGuid=OAHK_EP201374&form=cjson').then(response => {
    if (!response.ok) {
      throw new Error('cannot fetch data');
    }

    return response.json();
  });
}

