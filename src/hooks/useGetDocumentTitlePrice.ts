import { useEffect } from 'react'
// import useGetPriceData from './useGetPriceData'
import { useGetPriceFromFarm } from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  // const priceData = useGetPriceData()

  // const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address].price) : 0

  // const cakePriceUsdString =
  //   Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
  //     ? ''
  //     : ` - $${cakePriceUsd.toLocaleString(undefined, {
  //       minimumFractionDigits: 3,
  //       maximumFractionDigits: 3,
  //     })}`

  // useEffect(() => {
  //   document.title = `TTNDEX${cakePriceUsdString}`
  // }, [cakePriceUsdString])

  const cakePriceBusd = useGetPriceFromFarm()

  const cakePriceBusdString = cakePriceBusd.toLocaleString('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }) ?? '0.000'

  useEffect(() => {
    document.title = `TTNDEX - $${cakePriceBusdString}`
  }, [cakePriceBusdString])
}
export default useGetDocumentTitlePrice
