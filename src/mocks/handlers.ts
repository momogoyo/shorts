import {
  http,
  HttpResponse
} from 'msw'
import { mediaData } from './data/index'

let currentIndex = 0

export const handlers = [
  http.get(`/api/media`, ({ request }) => {
    const url = new URL(request.url)

    const limit = url.searchParams.get('limit')
    const direction = url.searchParams.get('direction')

    const limitValue = limit ? parseInt(limit, 10) : 3
    
    let startIndex = currentIndex

    if (direction === 'next') {
      startIndex = currentIndex
    } else if (direction === 'prev') {
      startIndex = Math.max(0, currentIndex - limitValue)
    }

    const endIndex = startIndex + limitValue;
    currentIndex = endIndex

    const selectedMedia = mediaData.slice(startIndex, endIndex)
    console.log(startIndex, endIndex)

    return HttpResponse.json({ media: selectedMedia })
  })
]

export const defaultHandlers = []
