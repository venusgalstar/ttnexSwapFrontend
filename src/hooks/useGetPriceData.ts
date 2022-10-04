import { BigNumber } from 'ethers';
import BN from "bignumber.js";
import { useEffect, useState } from 'react'
import { useSingleCallResult } from 'state/multicall/hooks';
import dummyPriceData from '../data/tokens.json';
import { useTokenContract } from './useContract';
import { CAKE } from '../constants';

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_BNB: string
    }
  }
}

// const api = 'https://api.pancakeswap.info/api/tokens'

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const busdaddr = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
  const wbnbAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  const ttnpBnbLpAddr = "0xC14B58920A46bB3462d304fE9E6824F73af2eF80"; // BNB-TTNP (TTNDEX)
  const bnbBusdLpAddr = "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"; // BNB-BUSD (Pancake)
  const BIG_TEN = new BN(10);

  const busdContract = useTokenContract(busdaddr, false);
  const busdAmount = new BN(useSingleCallResult(busdContract, "balanceOf", [bnbBusdLpAddr])?.result?.[0]?.toString());
  const wbnbContract = useTokenContract(wbnbAddr, false);
  let wbnbAmount = new BN(useSingleCallResult(wbnbContract, "balanceOf", [bnbBusdLpAddr])?.result?.[0]?.toString());
  const bnbPriceInBusd = busdAmount?.div(wbnbAmount);

  console.log("aaa", wbnbAmount);

  const brisContract = useTokenContract(CAKE.address, false);
  const brisAmount = new BN(useSingleCallResult(brisContract, "balanceOf", [ttnpBnbLpAddr])?.result?.[0]?.toString());
  wbnbAmount = new BN(useSingleCallResult(wbnbContract, "balanceOf", [ttnpBnbLpAddr])?.result?.[0]?.toString());
  const brisPriceInBnb = wbnbAmount?.div(brisAmount);

  const brisPriceInBusd = bnbPriceInBusd.times(brisPriceInBnb);
  console.log("[DAVID] ", bnbPriceInBusd?.toString(), brisPriceInBnb?.toString(), brisPriceInBusd.toString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(api)
        // const res: ApiResponse = await response.json();

        const res = JSON.parse(JSON.stringify(dummyPriceData));
        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export const useGetPriceFromFarm = () => {
  const busdaddr = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
  const wbnbAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  const ttnpBnbLpAddr = "0xC14B58920A46bB3462d304fE9E6824F73af2eF80"; // BNB-TTNP (TTNDEX)
  const bnbBusdLpAddr = "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"; // BNB-BUSD (Pancake)

  const busdContract = useTokenContract(busdaddr, false);
  const busdAmount = new BN(useSingleCallResult(busdContract, "balanceOf", [bnbBusdLpAddr])?.result?.[0]?.toString());
  const wbnbContract = useTokenContract(wbnbAddr, false);
  let wbnbAmount = new BN(useSingleCallResult(wbnbContract, "balanceOf", [bnbBusdLpAddr])?.result?.[0]?.toString());
  const bnbPriceInBusd = busdAmount?.div(wbnbAmount);

  const brisContract = useTokenContract(CAKE.address, false);
  const brisAmount = new BN(useSingleCallResult(brisContract, "balanceOf", [ttnpBnbLpAddr])?.result?.[0]?.toString());
  wbnbAmount = new BN(useSingleCallResult(wbnbContract, "balanceOf", [ttnpBnbLpAddr])?.result?.[0]?.toString());
  const brisPriceInBnb = wbnbAmount?.div(brisAmount);

  const brisPriceInBusd = bnbPriceInBusd.times(brisPriceInBnb);

  return parseFloat(brisPriceInBusd?.toString());
}

export default useGetPriceData
