import { setPageNum, setPageNumUpdated } from "../store/slices/articlesSlice"
import { useAppDispatch } from "./useAppDispatch"


const useNavigation = () => {
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNum(value))
    dispatch(setPageNumUpdated())
  }

  return {  handleChange }
}

export default useNavigation
