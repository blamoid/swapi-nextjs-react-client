import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import styled from 'styled-components'
import { memo } from 'react'
import { colors } from 'src/styles'
import Skeleton from './Skeleton'

export const StyledReactPaginate = styled(ReactPaginate)`
   {
    display: flex;
    padding-left: 0;
    list-style: none;
    max-width: 100%;
    overflow: auto;
    .page-link {
      position: relative;
      display: block;
      padding: 0.375rem 0.75rem;
      color: ${colors.blue_200};
      text-decoration: none;
      background-color: ${colors.white};
      border: 1px solid ${colors.grey_200};
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      cursor: pointer;
      &:hover {
        z-index: 2;
        color: ${colors.blue_300};
        background-color: ${colors.grey_200};
        border-color: ${colors.grey_200};
      }
    }
    .page-item.active .page-link {
      z-index: 3;
      color: ${colors.white};
      background-color: ${colors.blue_200};
      border-color: ${colors.blue_200};
    }
    .page-item:first-child .page-link {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    .page-item:last-child .page-link {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`

const Pagination = (props: ReactPaginateProps & { loading?: boolean }) => {
  return props.loading ? (
    <Skeleton style={{ height: '25px', width: '280px', borderRadius: '4px' }} />
  ) : (
    <StyledReactPaginate
      previousLabel='Previous'
      nextLabel='Next'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakLabel='...'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      activeClassName='active'
      {...props}
    />
  )
}

export default memo(Pagination)
