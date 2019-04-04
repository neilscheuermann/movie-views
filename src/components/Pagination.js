import React from 'react'
import PageNumbers from './PageNumbers'

const Pagination = props => {
  const { pageNum } = props
  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          className={
            pageNum <= 1 ? 'pagination-child-disabled' : 'pagination-child'
          }
          disabled={pageNum <= 1}
        >
          Previous
        </button>
        <PageNumbers pageNum={pageNum} />
        <button
          className={
            pageNum >= Infinity
              ? 'pagination-child-disabled'
              : 'pagination-child'
          }
          disabled={pageNum >= Infinity}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
