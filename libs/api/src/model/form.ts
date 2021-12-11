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
import { FieldGroup } from './fieldGroup';

export interface Form {
  name?: string;
  label?: string;
  type: Form.TypeEnum;
  created?: string;
  createdBy?: string;
  lastUpdated?: string;
  lastUpdatedBy?: string;
  fieldGroups?: Array<FieldGroup>;
}
export namespace Form {
  export type TypeEnum =
    | 'CLAIM_CL'
    | 'COVERAGE_CO'
    | 'MEMBER_ME'
    | 'OBJECT_OB'
    | 'ONBOARDING_ON'
    | 'OTHER_OT'
    | 'PERSON_PE';
  export const TypeEnum = {
    ClaimCl: 'CLAIM_CL' as TypeEnum,
    CoverageCo: 'COVERAGE_CO' as TypeEnum,
    MemberMe: 'MEMBER_ME' as TypeEnum,
    ObjectOb: 'OBJECT_OB' as TypeEnum,
    OnboardingOn: 'ONBOARDING_ON' as TypeEnum,
    OtherOt: 'OTHER_OT' as TypeEnum,
    PersonPe: 'PERSON_PE' as TypeEnum,
  };
}