import ReactPaginate from 'react-paginate'
import './Pagination.scss'

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
