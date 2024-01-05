import { ChainId } from '@baguette-exchange/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xb465Fd2d9C71d5D6e6c069aaC9b4E21c69aAA78f',
  [ChainId.AVALANCHE]: '0x812aA24BB2fe23745B627Aa8c1E657a0085cA5ec',
  [ChainId.CRYPTOSEALS]: '0xDfb690cF42cD1e9af757AEbA482F5171F8643E92',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
