import {
  http,
  HttpResponse
} from 'msw'
import { mediaData } from './data/index'

export const handlers = [
  http.get(`/api/media`, ({ request }) => {
    const url = new URL(request.url)
    // limit: 받아올 데이터 수
    // direction: swiper 위치
    // currentMediaId: 현재 미디어의 id
    const limit = url.searchParams.get('limit')
    const direction = url.searchParams.get('direction')
    const currentMediaId = url.searchParams.get('currentMediaId')

    // 파라미터 추출 및 기본값 설정
    const limitValue = limit ? parseInt(limit, 10) : 3
    const currentId = currentMediaId ? parseInt(currentMediaId, 10) : 0

    // 스와이프 방향에 따른 데이터
    let startIndex = currentId

    if (direction === 'next') {
      startIndex = Math.max(0, currentId - limitValue)
    } else if (direction === 'prev') {
      startIndex = Math.min(100 - limitValue, currentId + 1)
    }

    const endIndex = startIndex + limitValue

    const selectedMedia = mediaData.slice(startIndex, endIndex)

    return HttpResponse.json({ media: selectedMedia })
  })
]

export const defaultHandlers = []