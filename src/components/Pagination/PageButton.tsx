import type { PaginationButtonProps } from '../../interfaces/components'
import './Pagination.scss'

export const PageButton = ({ page, current, onClick }:PaginationButtonProps) => {


  return (
    <button onClick={() => onClick(page)} 
    className={page === current ? "page-button active" : "page-button"}>{page}</button>
  )
}
