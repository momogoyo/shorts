export interface Channel {
  name: string // 채널 명
  avatar: string // 아바타
}

export interface Shorts {
  description: string  // 설명
  comments: string // 댓글 개수
  likes: string // 좋아요 개수
  shares: string // 공유하기 수
}

export interface MediaDataType {
  id: number
  source: string // 미디어 리소스
  channel: Channel
  shorts: Shorts
}