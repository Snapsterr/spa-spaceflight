import { useState, useEffect } from "react"
import { setPageNumUpdated } from "../store/slices/articlesSlice"
import { useAppDispatch, useAppSelector } from "./useAppDispatch"


const useNavigation = () => {
  const [page, setPage] = useState<number>(1) 

  const dispatch = useAppDispatch()
  
  const { query } = useAppSelector(
    (state) => state.articlesSlice
  )

  useEffect(() => {
    setPage(1)
  }, [query])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(setPageNumUpdated())
  }

  return { page, handleChange }
}

export default useNavigation
