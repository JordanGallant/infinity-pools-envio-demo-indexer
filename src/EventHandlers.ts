/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ERC1967Proxy,
  ERC1967Proxy_Approval,
  ERC1967Proxy_ApprovalForAll,
  ERC1967Proxy_Deposit,
  ERC1967Proxy_DepositCollateral,
  ERC1967Proxy_Initialized,
  ERC1967Proxy_NoOpSwapperIds,
  ERC1967Proxy_PeripheryLiquidityAdded,
  ERC1967Proxy_Transfer,
  ERC1967Proxy_Upgraded,
  ERC1967Proxy_Withdraw,
  ERC1967Proxy_WithdrawCollateral,
} from "generated";

ERC1967Proxy.Approval.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.ERC1967Proxy_Approval.set(entity);
});

ERC1967Proxy.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.ERC1967Proxy_ApprovalForAll.set(entity);
});

ERC1967Proxy.Deposit.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.ERC1967Proxy_Deposit.set(entity);
});

ERC1967Proxy.DepositCollateral.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_DepositCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    poolAddress: event.params.poolAddress,
    token: event.params.token,
    decimals: event.params.decimals,
    source: event.params.source,
    amount: event.params.amount,
  };

  context.ERC1967Proxy_DepositCollateral.set(entity);
});

ERC1967Proxy.Initialized.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.ERC1967Proxy_Initialized.set(entity);
});

ERC1967Proxy.NoOpSwapperIds.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_NoOpSwapperIds = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ids: event.params.ids,
  };

  context.ERC1967Proxy_NoOpSwapperIds.set(entity);
});

ERC1967Proxy.PeripheryLiquidityAdded.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_PeripheryLiquidityAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pool: event.params.pool,
    lpNum: event.params.lpNum,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    earnEra: event.params.earnEra,
  };

  context.ERC1967Proxy_PeripheryLiquidityAdded.set(entity);
});

ERC1967Proxy.Transfer.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.ERC1967Proxy_Transfer.set(entity);
});

ERC1967Proxy.Upgraded.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.ERC1967Proxy_Upgraded.set(entity);
});

ERC1967Proxy.Withdraw.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    from: event.params.from,
    amount: event.params.amount,
  };

  context.ERC1967Proxy_Withdraw.set(entity);
});

ERC1967Proxy.WithdrawCollateral.handler(async ({ event, context }) => {
  const entity: ERC1967Proxy_WithdrawCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    poolAddress: event.params.poolAddress,
    token: event.params.token,
    decimals: event.params.decimals,
    destination: event.params.destination,
    amount: event.params.amount,
  };

  context.ERC1967Proxy_WithdrawCollateral.set(entity);
});
