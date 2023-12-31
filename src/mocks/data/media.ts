import { MediaDataType } from '../types'

const data = [
  {
    id: 0,
    source: '/video/shorts01.mp4',
    channel: {
      name: '조상헌',
      avatar: 'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#책추천: 다른 사람들에게 책을 추천하거나 추천받을 수 있는 태그입니다. #독서모임: 독서 모임과 관련된 정보를 공유하거나 참여하고 싶을 때 사용하는 태그입니다.',
      likes: '23,454',
      comments: '1,223',
      shares: '903'
    }
  },
  {
    id: 1,
    source: '/video/shorts02.mp4',
    channel: {
      name: '김비치',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#독후감: 책을 읽고 느낀 감정이나 생각을 공유하는 태그입니다. #독서챌린지: 독서 챌린지에 참여하거나 다른 사람들을 독서 챌린지에 동참하도록 유도하는 태그입니다.',
      likes: '5,954',
      comments: '123,423',
      shares: '194'
    }
  },
  {
    id: 2,
    source: '/video/shorts03.mp4',
    channel: {
      name: '김영호',
      avatar: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#도서리뷰: 책을 읽은 후 리뷰를 작성하거나 다른 사람들의 리뷰를 확인할 때 사용하는 태그입니다. #독서법: 효율적인 독서 방법이나 팁을 공유하는 태그입니다.',
      likes: '923,241',
      comments: '2,341,223',
      shares: '93'
    }
  },
  {
    id: 3,
    source: '/video/shorts04.mp4',
    channel: {
      name: '박성희',
      avatar: 'https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  },
  {
    id: 4,
    source: '/video/shorts05.mp4',
    channel: {
      name: '박정근',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  },
  {
    id: 5,
    source: '/video/shorts06.mp4',
    channel: {
      name: '이세명',
      avatar: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  },
  {
    id: 6,
    source: '/video/shorts07.mp4',
    channel: {
      name: '장지혜',
      avatar: 'https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  },
  {
    id: 7,
    source: '/video/shorts08.mp4',
    channel: {
      name: '최다인',
      avatar: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  },
  {
    id: 8,
    source: '/video/shorts09.mp4',
    channel: {
      name: '한지원',
      avatar: 'https://images.pexels.com/photos/2224736/pexels-photo-2224736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  },
  {
    id: 9,
    source: '/video/shorts10.mp4',
    channel: {
      name: '황검명',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    shorts: {
      description: '#문학: 문학 작품에 대한 이야기나 토론을 할 때 사용하는 태그입니다. #자기계발: 독서를 통해 자기계발에 관한 책이나 정보를 찾을 때 사용하는 태그입니다.',
      likes: '9,454',
      comments: '223',
      shares: '679'
    }
  }
]

// 샘플 데이터 100개로 확장
const sampleData = Array.from({ length: 100 }, (_, index) => ({
  ...data[index % data.length],
  id: index
}))

const mediaData: MediaDataType[] = sampleData

export default mediaData