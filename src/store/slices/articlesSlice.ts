import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getArticles, getArticlesByPage, getArticlesCount, getAllArticlesCount, getAllArticlesByPage } from "../thunks/fetchArticles"

const initialState: ArticlesState = {
  articles: [],
  count: 0,
  error: null,
  isLoading: false,
  query: [],
  isDataEnabled: false,
  isPageNumChanged: false
}

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    saveQuery(state, action: PayloadAction<string[]>) {
      state.query = action.payload
    },
    setPageNumUpdated(state) {
      state.isPageNumChanged = !state.isPageNumChanged
    }
  },
  extraReducers(builder) {
    builder

      //getAllArticlesCount
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
      
      //getAllArticlesByPage
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

      //getArticles
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true
        state.isDataEnabled = false
      })
      .addCase(getArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false
        state.articles = action.payload
        if (state.articles.length === 0) {
          state.isDataEnabled = true
        } 
      })
      .addCase(getArticles.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })

      //getArticlesCount
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

      //getArticlesByPage
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

export const { saveQuery, setPageNumUpdated } = articlesSlice.actions

export default articlesSlice.reducer