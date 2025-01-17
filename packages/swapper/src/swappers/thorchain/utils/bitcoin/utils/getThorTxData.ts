import { Asset } from '@shapeshiftoss/asset-service'

import { SwapError, SwapErrorTypes } from '../../../../../api'
import type { ThorchainSwapperDeps } from '../../../types'
import { getInboundAddressDataForChain } from '../../getInboundAddressDataForChain'
import { getLimit } from '../../getLimit/getLimit'
import { makeSwapMemo } from '../../makeSwapMemo/makeSwapMemo'

type GetBtcThorTxInfoArgs = {
  deps: ThorchainSwapperDeps
  sellAsset: Asset
  buyAsset: Asset
  sellAmountCryptoPrecision: string
  slippageTolerance: string
  destinationAddress: string
  xpub: string
  buyAssetTradeFeeUsd: string
}
type GetBtcThorTxInfoReturn = Promise<{
  opReturnData: string
  vault: string
  pubkey: string
}>
type GetBtcThorTxInfo = (args: GetBtcThorTxInfoArgs) => GetBtcThorTxInfoReturn

export const getThorTxInfo: GetBtcThorTxInfo = async ({
  deps,
  sellAsset,
  buyAsset,
  sellAmountCryptoPrecision,
  slippageTolerance,
  destinationAddress,
  xpub,
  buyAssetTradeFeeUsd,
}) => {
  try {
    const inboundAddress = await getInboundAddressDataForChain(deps.daemonUrl, sellAsset.assetId)
    const vault = inboundAddress?.address

    if (!vault)
      throw new SwapError(`[getThorTxInfo]: vault not found for asset`, {
        code: SwapErrorTypes.RESPONSE_ERROR,
        details: { inboundAddress, sellAsset },
      })

    const limit = await getLimit({
      buyAssetId: buyAsset.assetId,
      sellAmountCryptoPrecision,
      sellAsset,
      slippageTolerance,
      deps,
      buyAssetTradeFeeUsd,
    })

    const memo = makeSwapMemo({
      buyAssetId: buyAsset.assetId,
      destinationAddress,
      limit,
    })

    return {
      opReturnData: memo,
      vault,
      pubkey: xpub,
    }
  } catch (e) {
    if (e instanceof SwapError) throw e
    throw new SwapError('[getThorTxInfo]', { cause: e, code: SwapErrorTypes.TRADE_QUOTE_FAILED })
  }
}
