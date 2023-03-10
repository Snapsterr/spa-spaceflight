import { createAsyncThunk } from "@reduxjs/toolkit"
import { ArticlesService } from "../../services/ArticlesService"

export const getAllArticlesCount = createAsyncThunk<number, void, {rejectValue: string}>(
  "articles/getAllArticlesCount",
  async (_, thunkApi) => {
    try {
      const res = await ArticlesService.getAllArticlesCount()
      return res
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const getAllArticlesByPage = createAsyncThunk<IArticle[], number, {rejectValue: string}>(
  "articles/getAllArticlesByPage",
  async (page, thunkApi) => {
    try {
      const data = await ArticlesService.getAllArticlesByPage(page)
      return data
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const getArticles = createAsyncThunk<IArticle[], string[], {rejectValue: string}>(
  "articles/getArticles",
  async (query, thunkApi) => {
    try {
      const res = await ArticlesService.getArticles(query)
      return res
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const getArticlesCount = createAsyncThunk<number, string[], {rejectValue: string}>(
  "articles/getArticlesCount",
  async (query, thunkApi) => {
    try {
      const data = await ArticlesService.getArticlesCount(query)
      return data
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)


export const getArticlesByPage = createAsyncThunk<IArticle[], ArticlesByPage, {rejectValue: string}>(
  "articles/getArticlesByPage",
  async (data, thunkApi) => {
    const {query, page} = data
    try {
      const data = await ArticlesService.getNextPageArticles(query, page)
      return data
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)