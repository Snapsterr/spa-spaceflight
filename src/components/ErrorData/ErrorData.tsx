import { AiOutlineExclamationCircle } from "react-icons/ai"

const ErrorData = () => {
  return (
    <div className="error   absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center gap-x-2 w-full">
      <div className="error__container">
        <div className="error__wrapper">
          <AiOutlineExclamationCircle className="icon__exclamation" />
          <span className="error__text">
            Data not found. Please try another request
          </span>
        </div>
      </div>
    </div>
  )
}

export default ErrorData
