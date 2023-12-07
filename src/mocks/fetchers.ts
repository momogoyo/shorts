import axios from 'axios'

export const fetchMediaData = async function (
  limit,
  direction,
  currentIndex
) {
  const url = `/api/media?limit=${limit}&direction=${direction}&currentIndex=${currentIndex}`

  const response = await axios.get(url)
  return response
}