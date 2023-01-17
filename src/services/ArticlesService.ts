import { AxiosResponse } from "axios"
import spaceDevApi from "../api/spaceDevApi"

export class ArticlesService {
  static async getAllArticlesCount(): Promise<number> {    
    const res = await spaceDevApi.get<number>(`/articles/count`)
    return res.data
  }

  static async getAllArticlesByPage(page: number): Promise<IArticle[]> {    
    const currentPage = (page - 1) * 6
    const pageLimit = 6
    const res = await spaceDevApi.get<IArticle[]>(`/articles?_start=${currentPage}&_limit=${pageLimit}`)
    return res.data
  }

  static async getArticles(arr: Array<string>): Promise<IArticle[]> {
    const query = arr.map((el, i) => `_where[_or][${i}][title_contains]=${el}&_where[_or][${i}][summary_contains]=${el}`).join('&')
    
    const res = await spaceDevApi.get<IArticle[]>(`/articles?${query}&_sort=title:ASC&_start=0&_limit=6`)
    return res.data
  }
  static async getArticlesCount(arr: Array<string>): Promise<number> {
    const query = arr.map((el, i) => `_where[_or][${i}][title_contains]=${el}&_where[_or][${i}][summary_contains]=${el}`).join('&')
    
    const res = await spaceDevApi.get<number>(`/articles/count?${query}&_sort=title:ASC`)
    return res.data
  }

  static async getNextPageArticles(arr: Array<string>, page: number): Promise<IArticle[]> {
    const query = arr.map((el, i) => `_where[_or][${i}][title_contains]=${el}&_where[_or][${i}][summary_contains]=${el}`).join('&')
    
    const currentPage = (page - 1) * 6
    const pageLimit = 6
    const res = await spaceDevApi.get<IArticle[]>(`/articles?${query}&_sort=title:ASC&_start=${currentPage}&_limit=${pageLimit}`)
    
    return res.data
  }
}