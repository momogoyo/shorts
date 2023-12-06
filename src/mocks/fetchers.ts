import axios from 'axios'

export const fetchMediaData = async function (
  limit,
  direction,
  mediaId
) {
  const url = `/api/media?limit=${limit}&direction=${direction}&currentMediaId=${mediaId}`

  const response = await axios.get(url)
  return response
}