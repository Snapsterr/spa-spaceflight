import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getArticles, getArticlesByPage, getArticlesCount, getAllArticlesCount, getAllArticlesByPage } from "../thunks/fetchArticles"

const initialState: ArticlesState = {
  articles: [],
  count: 0,
  error: null,
  isLoading: false,
  query: [],
  noData: false
}

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    saveQuery(state, action: PayloadAction<string[]>) {
      state.query = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllArticlesCount.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllArticlesCount.fulfilled, (state, action: PayloadAction<number>) => {
        state.isLoading = false
        state.count = action.payload
      })
      .addCase(getAllArticlesCount.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })
      
      .addCase(getAllArticlesByPage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllArticlesByPage.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false
        state.articles = action.payload
      })
      .addCase(getAllArticlesByPage.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })

      .addCase(getArticles.pending, (state) => {
        state.isLoading = true
        state.noData = false
      })
      .addCase(getArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false
        state.articles = action.payload
        if (state.articles.length === 0) {
          state.noData = true
        } 
      })
      .addCase(getArticles.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })

      .addCase(getArticlesCount.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticlesCount.fulfilled, (state, action: PayloadAction<number>) => {
        state.isLoading = false
        state.count = action.payload
      })
      .addCase(getArticlesCount.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })

      .addCase(getArticlesByPage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticlesByPage.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false
        state.articles = action.payload
      })
      .addCase(getArticlesByPage.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })
  },
})

export const { saveQuery } = articlesSlice.actions

export default articlesSlice.reducer