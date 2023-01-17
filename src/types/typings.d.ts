interface IArticle {
  id:	integer
  featured:	boolean
  default: false
  title:	string
  url:	string
  imageUrl:	string
  newsSite:	string
  summary:	string
  publishedAt:	string
  launches:	[{
    id:	string
    provider:	string
  }]
  events:	[{
    id:	string
    provider:	string
  }]
}

type RequestQuery = {
  query: string[]
}

type ArticlesState = {
  articles: IArticle[]
  count: number
  isLoading: boolean
  error: string | null
  query: string[]
  noData: boolean
}

type ArticlesByPage = {
  query: string[]
  page: number
}

type ArticleAction = {
  type: string
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction