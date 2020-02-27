import axios from "axios";

export async function axiosQuery(route, parameters) {
  // let url = 'https://jo-server.herokuapp.com' + route
  let url = 'http://localhost:8000' + route
  let res = await axios.get(url, { headers: { accept: '*/json' } })
  return res.data
}

export function numberToRank(number) {
  switch (number) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default :
      return "th"
  }
}

export function rgbBuilder(r, g, b) {
  return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")"
}
