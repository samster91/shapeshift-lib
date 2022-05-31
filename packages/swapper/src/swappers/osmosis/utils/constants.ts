
export const MAX_ALLOWANCE = '100000000000000000000000000'
export const APPROVAL_GAS_LIMIT = '100000' // Most approvals are around 40k, we've seen 72k in the wild, so 100000 for safety.
export const DEFAULT_SLIPPAGE = '0.03' // 3%
export const MAX_SLIPPAGE = '0.3' // 30%
export const ETH_FEE_ESTIMATE_PADDING = '1.2' // Padding the fee estimate by 20% to avoid trade errors.
export const APPROVAL_BUY_AMOUNT = '100000000000000000' // A valid buy amount - 0.1 ETH
export const DEFAULT_SOURCE = [{ name: 'Osmosis', proportion: '1' }]
export const MAX_SWAPPER_SELL = '100000000000000000000000000'
export const DEFAULT_SLIPPAGE_TOLERANCE = '3.0' // 3%
