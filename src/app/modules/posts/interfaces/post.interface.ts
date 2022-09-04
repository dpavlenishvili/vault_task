export interface PostDTO {
  userId?: number,
  id?: number,
  title: string,
  body: string,
}

export interface CommentsDTO {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
