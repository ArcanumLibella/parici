import axios from "axios";

export async function axiosQuery(route, parameters) {
  let url = 'https://jo-server.herokuapp.com' + route
  // let url = 'http://localhost:8000' + route
  let res = await axios.get(url, { headers: { accept: '*/json' } })
  return res.data
}

export function numberToRank(number) {
  if (number === 1) {
    return "st"
  } else if (number === 2) {
    return "nd"
  } else if (number === 3) {
    return "rd"
  } else {
    return "th"
  }
}
