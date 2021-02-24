import Cookies from 'universal-cookie';


export default (defaultCookie) => {
  const cookies = new Cookies(defaultCookie)
  return cookies
}