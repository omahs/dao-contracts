/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type Curve = {
  constant: {
    y: Uint128;
    [k: string]: unknown;
  };
} | {
  saturating_linear: SaturatingLinear;
} | {
  piecewise_linear: PiecewiseLinear;
};
export interface InstantiateMsg {
  owner?: string | null;
  params: UncheckedVestingParams;
}
export interface UncheckedVestingParams {
  amount: Uint128;
  denom: UncheckedDenom;
  description?: string | null;
  recipient: string;
  title?: string | null;
  vesting_schedule: Curve;
}
export interface SaturatingLinear {
  max_x: number;
  max_y: Uint128;
  min_x: number;
  min_y: Uint128;
  [k: string]: unknown;
}
export interface PiecewiseLinear {
  steps: [number, Uint128][];
  [k: string]: unknown;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  distribute: {};
} | {
  cancel: {};
} | {
  delegate: {
    amount: Uint128;
    validator: string;
  };
} | {
  undelegate: {
    amount: Uint128;
    validator: string;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
  };
} | {
  update_ownership: Action;
};
export type Binary = string;
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export type QueryMsg = {
  info: {};
} | {
  ownership: {};
};
export type CheckedDenom = {
  native: string;
} | {
  cw20: Addr;
};
export type Addr = string;
export type Decimal = string;
export type VestingPaymentStatus = "active" | "canceled" | "canceled_and_unbonding" | "fully_vested" | "unfunded";
export interface VestingPayment {
  amount: Uint128;
  canceled_at_time?: number | null;
  claimed_amount: Uint128;
  denom: CheckedDenom;
  description?: string | null;
  recipient: Addr;
  rewards: VestingPaymentRewards;
  staked_amount: Uint128;
  status: VestingPaymentStatus;
  title?: string | null;
  vesting_schedule: Curve;
}
export interface VestingPaymentRewards {
  paid_rewards_per_token: Decimal;
  pending: Decimal;
}
export interface OwnershipForAddr {
  owner?: Addr | null;
  pending_expiry?: Expiration | null;
  pending_owner?: Addr | null;
}