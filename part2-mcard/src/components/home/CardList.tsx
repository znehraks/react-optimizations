import { useInfiniteQuery } from 'react-query'
import ListRow from '../shared/ListRow'
import { getCards } from '@/remote/card'
import { flatten } from 'lodash-es'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCallback } from 'react'

function CardList() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
    },
  )
  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetching) {
      return
    }
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  console.log('data', data)
  if (!data) return null
  const cards = flatten(data?.pages.map(({ items }) => items))
  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={!!hasNextPage}
        loader={<>Loading...</>}
        next={loadMore}
      >
        {cards.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
              right={card.payback && <>{card.payback}</>}
              withArrow
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}
export default CardList
