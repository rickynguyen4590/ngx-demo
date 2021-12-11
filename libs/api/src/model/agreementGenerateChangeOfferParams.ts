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

export interface AgreementGenerateChangeOfferParams {
  submissionType: AgreementGenerateChangeOfferParams.SubmissionTypeEnum;
  offerMarineObjectIds?: Array<string>;
}
export namespace AgreementGenerateChangeOfferParams {
  export type SubmissionTypeEnum =
    | 'NEWRENEW_0'
    | 'ADD__OBJECT_1'
    | 'VALUE_2'
    | 'TRIP_3'
    | 'LAYUP_4'
    | 'EXPIRE_5'
    | 'PROLONG_6'
    | 'GENERAL_ADD_7'
    | 'GENERAL_RETURN_8'
    | 'TEXT_ADD_9';
  export const SubmissionTypeEnum = {
    Newrenew0: 'NEWRENEW_0' as SubmissionTypeEnum,
    AddObject1: 'ADD__OBJECT_1' as SubmissionTypeEnum,
    Value2: 'VALUE_2' as SubmissionTypeEnum,
    Trip3: 'TRIP_3' as SubmissionTypeEnum,
    Layup4: 'LAYUP_4' as SubmissionTypeEnum,
    Expire5: 'EXPIRE_5' as SubmissionTypeEnum,
    Prolong6: 'PROLONG_6' as SubmissionTypeEnum,
    GeneralAdd7: 'GENERAL_ADD_7' as SubmissionTypeEnum,
    GeneralReturn8: 'GENERAL_RETURN_8' as SubmissionTypeEnum,
    TextAdd9: 'TEXT_ADD_9' as SubmissionTypeEnum,
  };
}
