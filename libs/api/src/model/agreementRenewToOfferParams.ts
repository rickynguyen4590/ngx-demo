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

export interface AgreementRenewToOfferParams {
  toYear: number;
  currency?: string;
  toMarked?: boolean;
  includeAgreements?: Array<string>;
  claimLevel: AgreementRenewToOfferParams.ClaimLevelEnum;
  premiumLevel: AgreementRenewToOfferParams.PremiumLevelEnum;
  manualDiscount?: number;
  statisticsLevel: AgreementRenewToOfferParams.StatisticsLevelEnum;
  insurerLevel?: AgreementRenewToOfferParams.InsurerLevelEnum;
  statisticsFromYear?: number;
  statisticsToYear?: number;
}
export namespace AgreementRenewToOfferParams {
  export type ClaimLevelEnum = 'CLAIM_1' | 'CATEGORY_2';
  export const ClaimLevelEnum = {
    Claim1: 'CLAIM_1' as ClaimLevelEnum,
    Category2: 'CATEGORY_2' as ClaimLevelEnum,
  };
  export type PremiumLevelEnum =
    | 'GROSS_0'
    | 'LESS_OWN_DISC_1'
    | 'LESS_DISCOUNT_2'
    | 'LESS_KEYIN_DISC_9';
  export const PremiumLevelEnum = {
    Gross0: 'GROSS_0' as PremiumLevelEnum,
    LessOwnDisc1: 'LESS_OWN_DISC_1' as PremiumLevelEnum,
    LessDiscount2: 'LESS_DISCOUNT_2' as PremiumLevelEnum,
    LessKeyinDisc9: 'LESS_KEYIN_DISC_9' as PremiumLevelEnum,
  };
  export type StatisticsLevelEnum = '_100_PERCENT_0' | 'OUR_SHARE__1';
  export const StatisticsLevelEnum = {
    _100Percent0: '_100_PERCENT_0' as StatisticsLevelEnum,
    OurShare1: 'OUR_SHARE__1' as StatisticsLevelEnum,
  };
  export type InsurerLevelEnum = 'BILLINGNO_1' | 'SECURITY_2';
  export const InsurerLevelEnum = {
    Billingno1: 'BILLINGNO_1' as InsurerLevelEnum,
    Security2: 'SECURITY_2' as InsurerLevelEnum,
  };
}
