import { useContext } from 'react'
import { useRouter } from 'next/router'
import PlanetsContext from 'src/store/PlanetsContext'
import { usePageLoading } from 'src/hooks/usePageLoading'
import Button from '../Button'
import Pagination from '../Pagination'
import * as S from './styled'

export const PLANETS_PAGE_RANGE = 10

const PlanetsListControls = () => {
  const { planets } = useContext(PlanetsContext)
  const { isPageLoading } = usePageLoading()
  const router = useRouter()

  const refreshListButtonClickHandler = () => {
    router.replace({
      pathname: `${
        window.location.protocol + '//' + window.location.host
      }/planets`,
      query: router.query.page ? { page: router.query.page } : {},
    })
  }

  const handlePageChange = (event: { selected: number }) => {
    router.replace({
      pathname: `${
        window.location.protocol + '//' + window.location.host
      }/planets`,
      query: { page: event.selected + 1 },
    })
  }

  return (
    <S.PlanetsListContols>
      <Button
        onClick={refreshListButtonClickHandler}
        disabled={isPageLoading || !planets?.count}
      >
        Refresh list
      </Button>
      <Pagination
        onPageChange={handlePageChange}
        pageRangeDisplayed={PLANETS_PAGE_RANGE}
        pageCount={planets?.count ? planets.count / PLANETS_PAGE_RANGE : 0}
        renderOnZeroPageCount={null}
        initialPage={parseInt(router.query.page as string) - 1}
        disableInitialCallback
        loading={!planets?.count}
      />
    </S.PlanetsListContols>
  )
}

export default PlanetsListControls
