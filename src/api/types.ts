export type GetImagesType = {
    id: string
    image: string
}

export type GetImagesCommentsType  = {
    id: string
    author: string
    text: string
}
export type GetImagesCommentType = {
    id: string
    image: string
    largeImage: string
    comments: Array<GetImagesCommentsType>
}