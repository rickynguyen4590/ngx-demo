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
import { WarInterestView } from './warInterestView';
import { SimplePerson } from './simplePerson';

export interface PremiumView {
  created?: string;
  createdBy?: string;
  lastUpdated?: string;
  lastUpdatedBy?: string;
  id?: string;
  agreementId?: string;
  year?: number;
  object?: SimpleInsuredObject;
  interest?: string;
  condition?: number;
  conditionSet?: string;
  businessSubclass?: number;
  startDate?: string;
  endDate?: string;
  coverageStartDate?: string;
  coverageChangeDate?: string;
  coverageEndDate?: string;
  agreementStartDate?: string;
  agreementEndDate?: string;
  rateMarket?: string;
  currency?: string;
  payer?: SimplePerson;
  originalInsured?: SimplePerson;
  totalAmount?: number;
  ourShare?: number;
  ownersDiscount?: number;
  sourceDiscount?: number;
  premiumDays?: number;
  rate?: number;
  netRate?: number;
  ingoingPremium?: number;
  outgoingRate?: number;
  outgoingPremium?: number;
  premium?: number;
  netPremium?: number;
  policyCoverId?: string;
  policyFrameId?: string;
  correctionType?: PremiumView.CorrectionTypeEnum;
  coverageStatus?: PremiumView.CoverageStatusEnum;
  status?: PremiumView.StatusEnum;
  addStatus?: PremiumView.AddStatusEnum;
  type?: PremiumView.TypeEnum;
  typeDescription?: string;
  code?: string;
  nonmarineObjectType?: string;
  coverageId?: string;
  warInterest?: WarInterestView;
  personalLedgerStatus?: PremiumView.PersonalLedgerStatusEnum;
  personalLedgerCallDate?: string;
}
export namespace PremiumView {
  export type CorrectionTypeEnum = 'MAIN_0' | 'VALUE_1' | 'VALUPROL_2';
  export const CorrectionTypeEnum = {
    Main0: 'MAIN_0' as CorrectionTypeEnum,
    Value1: 'VALUE_1' as CorrectionTypeEnum,
    Valuprol2: 'VALUPROL_2' as CorrectionTypeEnum,
  };
  export type CoverageStatusEnum =
    | 'ACTIVE_A'
    | 'CANCELLED_C'
    | 'LOST_L'
    | 'PROLONGED_P'
    | 'REPLACED_R'
    | 'SOLD_S';
  export const CoverageStatusEnum = {
    ActiveA: 'ACTIVE_A' as CoverageStatusEnum,
    CancelledC: 'CANCELLED_C' as CoverageStatusEnum,
    LostL: 'LOST_L' as CoverageStatusEnum,
    ProlongedP: 'PROLONGED_P' as CoverageStatusEnum,
    ReplacedR: 'REPLACED_R' as CoverageStatusEnum,
    SoldS: 'SOLD_S' as CoverageStatusEnum,
  };
  export type StatusEnum =
    | 'CANCEL_C'
    | 'ESTABLISHED_E'
    | 'OFFER_O'
    | 'QUOTE_Q'
    | 'WORK_W';
  export const StatusEnum = {
    CancelC: 'CANCEL_C' as StatusEnum,
    EstablishedE: 'ESTABLISHED_E' as StatusEnum,
    OfferO: 'OFFER_O' as StatusEnum,
    QuoteQ: 'QUOTE_Q' as StatusEnum,
    WorkW: 'WORK_W' as StatusEnum,
  };
  export type AddStatusEnum =
    | 'PROV_NOT_WRITTE_1'
    | 'ADD_BORD_NOT_WR_2'
    | 'WRITTEN_3'
    | 'WAIT_5'
    | 'PROV_ORDERED_8'
    | 'ADDBORD_ORDER_9';
  export const AddStatusEnum = {
    ProvNotWritte1: 'PROV_NOT_WRITTE_1' as AddStatusEnum,
    AddBordNotWr2: 'ADD_BORD_NOT_WR_2' as AddStatusEnum,
    Written3: 'WRITTEN_3' as AddStatusEnum,
    Wait5: 'WAIT_5' as AddStatusEnum,
    ProvOrdered8: 'PROV_ORDERED_8' as AddStatusEnum,
    AddbordOrder9: 'ADDBORD_ORDER_9' as AddStatusEnum,
  };
  export type TypeEnum =
    | 'GENERAL_ADD_A'
    | 'BONUS_B'
    | 'CANCEL_C'
    | 'ADJUSTMENT_D'
    | 'RELEASE_CALL_E'
    | 'FEECOM_F'
    | 'GENERAL_RETURN_G'
    | 'DISCOUNT_H'
    | 'LAST_INSTALMENT_I'
    | 'NEWSALE_COMM_J'
    | 'LAYUP_L'
    | 'ORIGINAL_O'
    | 'PROLONGATION_P'
    | 'NEWCURR_Q'
    | 'RETURN_VALUE_R'
    | 'SALESTOP_S'
    | 'TRIP_T'
    | 'RI_OBJECT_DECL_U'
    | 'RECOVERY_V'
    | 'TEXT_ADENDUM_X'
    | 'AD_ING_COM_Y'
    | 'ADDOUT_COMM_Z';
  export const TypeEnum = {
    GeneralAddA: 'GENERAL_ADD_A' as TypeEnum,
    BonusB: 'BONUS_B' as TypeEnum,
    CancelC: 'CANCEL_C' as TypeEnum,
    AdjustmentD: 'ADJUSTMENT_D' as TypeEnum,
    ReleaseCallE: 'RELEASE_CALL_E' as TypeEnum,
    FeecomF: 'FEECOM_F' as TypeEnum,
    GeneralReturnG: 'GENERAL_RETURN_G' as TypeEnum,
    DiscountH: 'DISCOUNT_H' as TypeEnum,
    LastInstalmentI: 'LAST_INSTALMENT_I' as TypeEnum,
    NewsaleCommJ: 'NEWSALE_COMM_J' as TypeEnum,
    LayupL: 'LAYUP_L' as TypeEnum,
    OriginalO: 'ORIGINAL_O' as TypeEnum,
    ProlongationP: 'PROLONGATION_P' as TypeEnum,
    NewcurrQ: 'NEWCURR_Q' as TypeEnum,
    ReturnValueR: 'RETURN_VALUE_R' as TypeEnum,
    SalestopS: 'SALESTOP_S' as TypeEnum,
    TripT: 'TRIP_T' as TypeEnum,
    RiObjectDeclU: 'RI_OBJECT_DECL_U' as TypeEnum,
    RecoveryV: 'RECOVERY_V' as TypeEnum,
    TextAdendumX: 'TEXT_ADENDUM_X' as TypeEnum,
    AdIngComY: 'AD_ING_COM_Y' as TypeEnum,
    AddoutCommZ: 'ADDOUT_COMM_Z' as TypeEnum,
  };
  export type PersonalLedgerStatusEnum = 'OPEN_O' | 'SETTLED_S';
  export const PersonalLedgerStatusEnum = {
    OpenO: 'OPEN_O' as PersonalLedgerStatusEnum,
    SettledS: 'SETTLED_S' as PersonalLedgerStatusEnum,
  };
}
