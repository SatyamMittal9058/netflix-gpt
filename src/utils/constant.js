export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USERICON_URL="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";
export const UTUBE_URL="https://www.youtube.com/embed/";
export const IMG_URL="https://image.tmdb.org/t/p/w500";
export const BG_IMG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+ process.env.REACT_APP_TMDB_APIKEY,
    }
  };
export const API_VIDEO={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcwNjE2MTE2YjBmNzJmNDdhNWJkYWFlZTE3Mzc3YiIsInN1YiI6IjY1NGUyYzU2NDFhNTYxMzM2YzVmY2NhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EUhUsqjxHrNV2-LdFiA5qGwRlwUIpKSynBKG4CygN1I'
  }
};
export const SUPPORTED_LANG=[
  {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"},
]
export const OPENAI_APIKEY=process.env.REACT_APP_OPENAI_APIKEY;

