import {
  http,
  HttpResponse
} from 'msw'

const contents = [{
    id: 0,
    source: 'http://127.0.0.1:8080/shorts01.mp4',
    channel: '미더덕',
    description: '#책추천: 다른 사람들에게 책을 추천하거나 추천받을 수 있는 태그입니다. #독서모임: 독서 모임과 관련된 정보를 공유하거나 참여하고 싶을 때 사용하는 태그입니다.',
    bgm: '',
    likes: '23,454',
    comments: '1,223',
    shares: '903'
  },
  {
    id: 1,
    source: 'http://127.0.0.1:8080/shorts02.mp4',
    channel: '현윶인',
    description: '#독후감: 책을 읽고 느낀 감정이나 생각을 공유하는 태그입니다. #독서챌린지: 독서 챌린지에 참여하거나 다른 사람들을 독서 챌린지에 동참하도록 유도하는 태그입니다.',
    bgm: '',
    likes: '5,954',
    comments: '123,423',
    shares: '194'
  },
  {
    id: 2,
    source: 'http://127.0.0.1:8080/shorts03.mp4',
    channel: '위독한 소식가',
    description: '#도서리뷰: 책을 읽은 후 리뷰를 작성하거나 다른 사람들의 리뷰를 확인할 때 사용하는 태그입니다. #독서법: 효율적인 독서 방법이나 팁을 공유하는 태그입니다.',
    bgm: '',
    likes: '923,241',
    comments: '2,341,223',
    shares: '93'
  },
  {
    id: 3,
    source: 'http://127.0.0.1:8080/shorts04.mp4',
    channel: '장장덕',
    description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
    bgm: '',
    likes: '9,454',
    comments: '223',
    shares: '679'
  }
]

export const handlers = [
    http.get(`/api/media`, ({ request, params, cookies }) => {
      // new HttpResponse(null, { status: 200 })
      return HttpResponse.json(contents)
    })
]

export const defaultHandlers = []