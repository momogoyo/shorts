import {
  http,
  HttpResponse
} from 'msw'
import { mediaData } from './data/index'

let currentId = 0

export const handlers = [
  http.get(`/api/media`, ({ request }) => {
    const url = new URL(request.url)
    
    const limit = url.searchParams.get('limit')
    const direction = url.searchParams.get('direction')
    const index = url.searchParams.get('currentIndex')

    const limitValue = limit ? parseInt(limit, 10) : 3
    const currentIndex = index ? parseInt(index, 10) : 3
    
    let startIndex = currentId

    // if (direction === 'next') {
    //   startIndex = currentId
    // } else if (direction === 'prev') {
    //   startIndex = Math.max(0, currentId - (limitValue * 2))
    // }

    const endIndex = startIndex + limitValue
    currentId = endIndex

    const selectedMedia = mediaData.slice(startIndex, endIndex)

    return HttpResponse.json({ media: selectedMedia })
  })
]

export const defaultHandlers = []
