import {
  http,
  HttpResponse
} from 'msw'
import { mediaData } from './data/index'

let currentId = 0

export const handlers = [
  http.get(`/api/media`, ({ request }) => {
    const url = new URL(request.url)
    
    // 데이터 몇개씩 받아올지
    const limit = url.searchParams.get('limit')
    const limitValue = limit ? parseInt(limit, 10) : 3
    
    let startIndex = currentId
    const endIndex = startIndex + limitValue

    currentId = endIndex

    const selectedMedia = mediaData.slice(startIndex, endIndex)

    return HttpResponse.json({ media: selectedMedia })
  })
]

export const defaultHandlers = []
 

// return 타입에 맞게 MediaData 타입을 써줘야 합니다...