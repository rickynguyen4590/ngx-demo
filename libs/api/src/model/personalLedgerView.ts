/**
 * PARIS API
 * The PARIS API is based on a REST achitecture, and is using JSON as data format.<br/>PARIS API is Stateless, the server does not store any state about the client session on the server side. Statelessness ensures that each service consumer request can be treated independently by the service.<br/>Authentication against the API is done using a combination of Basic Authentication and Token based authentication or API-Keys.<br/><br/>©2021 NORIA AS. All Rights Reserved. PARIS is a trademark of <a href=\"http://noria.no/\" target=\"_blank\">NORIA AS</a>.
 *
 * The version of the OpenAPI document: 4.7-202112021325
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SimpleInsuredObject } from './simpleInsuredObject';
import { SimplePerson } from './simplePerson';

export interface PersonalLedgerView {
  accountingGroup?: PersonalLedgerView.AccountingGroupEnum;
  billingNo?: SimplePerson;
  accountNo?: SimplePerson;
  currency?: string;
  dueDate?: string;
  documentDate?: string;
  calledTimes?: number;
  referenceName?: string;
  interestReference?: string;
  documentNumber?: number;
  referenceNumber?: number;
  bordereauReference?: string;
  callDate?: string;
  validDate?: string;
  settledDate?: string;
  transactionType?: PersonalLedgerView.TransactionTypeEnum;
  createdBy?: string;
  fromDate?: string;
  toDate?: string;
  comment?: string;
  status?: PersonalLedgerView.StatusEnum;
  amount?: number;
  policyCoverId?: string;
  object?: SimpleInsuredObject;
  interest?: string;
}
export namespace PersonalLedgerView {
  export type AccountingGroupEnum =
    | 'AS_SPEC_IO_0'
    | 'DIRECT_1'
    | 'RECEIVED_2'
    | 'CEDED_3'
    | 'CLAIM_PAYMENTS_4'
    | 'AGENT_7'
    | 'TREATIES_8'
    | 'INTERIMS_9';
  export const AccountingGroupEnum = {
    AsSpecIo0: 'AS_SPEC_IO_0' as AccountingGroupEnum,
    Direct1: 'DIRECT_1' as AccountingGroupEnum,
    Received2: 'RECEIVED_2' as AccountingGroupEnum,
    Ceded3: 'CEDED_3' as AccountingGroupEnum,
    ClaimPayments4: 'CLAIM_PAYMENTS_4' as AccountingGroupEnum,
    Agent7: 'AGENT_7' as AccountingGroupEnum,
    Treaties8: 'TREATIES_8' as AccountingGroupEnum,
    Interims9: 'INTERIMS_9' as AccountingGroupEnum,
  };
  export type TransactionTypeEnum =
    | 'BALANCE_0'
    | 'CASH_CL_BALANCE_1'
    | 'BALANCE_CORRECT_10'
    | 'PREMIUM_DEPOT_11'
    | 'CLAIM_DEPOT_12'
    | 'XL_PREMIUM_13'
    | 'XL_CLAIM_14'
    | 'PROFIT_COMM_15'
    | 'INTEREST_16'
    | 'REMIT_17'
    | 'RELPREM_DEPOT_18'
    | 'REL_CLM_DEPOT_19'
    | 'PREMIUM_2'
    | 'INTRPREMDEPOT_20'
    | 'INTRCLMDEPOT_21'
    | 'COLLECT_FEE_22'
    | 'ADM_FEE_23'
    | 'COMMISSION_24'
    | 'TAX_25'
    | 'NATPREM_26'
    | 'DUTY_PAYMENT_27'
    | 'INST_ADDENDUM_28'
    | 'ACCREBATE_29'
    | 'RETURN_PREMIUM_3'
    | 'NSCOMM_30'
    | 'LAST_INSTALMENT_31'
    | 'RELEASE_CALL_32'
    | 'OTHER_EXPENSES_33'
    | 'CLAIM_4'
    | 'CASH_CLAIM_5'
    | 'REFUND_6'
    | 'REMITTANCE_7'
    | 'BET_KORR_77'
    | 'VARIOUS_8'
    | 'AS_LOST_9';
  export const TransactionTypeEnum = {
    Balance0: 'BALANCE_0' as TransactionTypeEnum,
    CashClBalance1: 'CASH_CL_BALANCE_1' as TransactionTypeEnum,
    BalanceCorrect10: 'BALANCE_CORRECT_10' as TransactionTypeEnum,
    PremiumDepot11: 'PREMIUM_DEPOT_11' as TransactionTypeEnum,
    ClaimDepot12: 'CLAIM_DEPOT_12' as TransactionTypeEnum,
    XlPremium13: 'XL_PREMIUM_13' as TransactionTypeEnum,
    XlClaim14: 'XL_CLAIM_14' as TransactionTypeEnum,
    ProfitComm15: 'PROFIT_COMM_15' as TransactionTypeEnum,
    Interest16: 'INTEREST_16' as TransactionTypeEnum,
    Remit17: 'REMIT_17' as TransactionTypeEnum,
    RelpremDepot18: 'RELPREM_DEPOT_18' as TransactionTypeEnum,
    RelClmDepot19: 'REL_CLM_DEPOT_19' as TransactionTypeEnum,
    Premium2: 'PREMIUM_2' as TransactionTypeEnum,
    Intrpremdepot20: 'INTRPREMDEPOT_20' as TransactionTypeEnum,
    Intrclmdepot21: 'INTRCLMDEPOT_21' as TransactionTypeEnum,
    CollectFee22: 'COLLECT_FEE_22' as TransactionTypeEnum,
    AdmFee23: 'ADM_FEE_23' as TransactionTypeEnum,
    Commission24: 'COMMISSION_24' as TransactionTypeEnum,
    Tax25: 'TAX_25' as TransactionTypeEnum,
    Natprem26: 'NATPREM_26' as TransactionTypeEnum,
    DutyPayment27: 'DUTY_PAYMENT_27' as TransactionTypeEnum,
    InstAddendum28: 'INST_ADDENDUM_28' as TransactionTypeEnum,
    Accrebate29: 'ACCREBATE_29' as TransactionTypeEnum,
    ReturnPremium3: 'RETURN_PREMIUM_3' as TransactionTypeEnum,
    Nscomm30: 'NSCOMM_30' as TransactionTypeEnum,
    LastInstalment31: 'LAST_INSTALMENT_31' as TransactionTypeEnum,
    ReleaseCall32: 'RELEASE_CALL_32' as TransactionTypeEnum,
    OtherExpenses33: 'OTHER_EXPENSES_33' as TransactionTypeEnum,
    Claim4: 'CLAIM_4' as TransactionTypeEnum,
    CashClaim5: 'CASH_CLAIM_5' as TransactionTypeEnum,
    Refund6: 'REFUND_6' as TransactionTypeEnum,
    Remittance7: 'REMITTANCE_7' as TransactionTypeEnum,
    BetKorr77: 'BET_KORR_77' as TransactionTypeEnum,
    Various8: 'VARIOUS_8' as TransactionTypeEnum,
    AsLost9: 'AS_LOST_9' as TransactionTypeEnum,
  };
  export type StatusEnum = 'OPEN_O' | 'SETTLED_S';
  export const StatusEnum = {
    OpenO: 'OPEN_O' as StatusEnum,
    SettledS: 'SETTLED_S' as StatusEnum,
  };
}