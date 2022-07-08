jest.mock('../utils/zrxService')
jest.mock('../utils/helpers/helpers')

import { BTC, FOX, WETH } from '../../utils/test-data/assets'
import { MAX_ZRX_TRADE } from '../utils/constants'
import { getZrxMinMax } from './getZrxMinMax'

jest.mock('../utils/helpers/helpers', () => ({
  getUsdRate: () => '1',
  normalizeAmount: () => '1'
}))

describe('getZrxMinMax', () => {
  it('returns minimum and maximum', async () => {
    const minMax = await getZrxMinMax(FOX, WETH)
    expect(minMax.minimum).toBe('1')
    expect(minMax.maximum).toBe(MAX_ZRX_TRADE)
  })
  it('fails on non eth asset', async () => {
    await expect(getZrxMinMax(BTC, WETH)).rejects.toThrow('[getZrxMinMax]')
  })
})
