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

export interface SimplePerson {
  id?: number;
  name?: string;
  shortName: string;
  type: SimplePerson.TypeEnum;
  status?: SimplePerson.StatusEnum;
  stopUse?: boolean;
  invisible?: boolean;
  canModify?: boolean;
}
export namespace SimplePerson {
  export type TypeEnum =
    | 'INSURANCE_COMP_1'
    | 'LAWYER_10'
    | 'AVR_ADJUSTER_11'
    | 'RATING_COMP_12'
    | 'MARITIME_AUTHOR_13'
    | 'INSURANCE_BROKE_2'
    | 'OPPOSITE_PARTY_21'
    | 'CLAIM_RECEIVER_22'
    | 'ONE_TIME_VENDOR_23'
    | 'COVER_3'
    | 'QUOTA_SHTREATY_4'
    | 'CUSTOMER_DIR_5'
    | 'EMPLOYEE_51'
    | 'CREW_52'
    | 'ASSOCIATION_55'
    | 'SALES_AGENT_6'
    | 'AGENTOFFICE_61'
    | 'AGENTEMPLOYEE_62'
    | 'SURVEYOR_7'
    | 'MORTGBANK_8'
    | 'ORGANOFFICE_81'
    | 'ORGEMPLOYEE_82'
    | 'CORRESPONDENT_83'
    | 'REGION_85'
    | 'MORTGOFFICE_86'
    | 'INTERIM_1_88'
    | 'MORTGAGEE_CON_9'
    | 'OWN_RETENTION_91'
    | 'CUTOFF_92'
    | 'OWN_COMM_BR_93'
    | 'TECHNICAL_ADDR_94'
    | 'INTERIM_ACCOUNT_95'
    | 'INGOING_VAT_96'
    | 'OUTGOING_VAT_97'
    | 'INTERIM_2_98'
    | 'OTHER_99';
  export const TypeEnum = {
    InsuranceComp1: 'INSURANCE_COMP_1' as TypeEnum,
    Lawyer10: 'LAWYER_10' as TypeEnum,
    AvrAdjuster11: 'AVR_ADJUSTER_11' as TypeEnum,
    RatingComp12: 'RATING_COMP_12' as TypeEnum,
    MaritimeAuthor13: 'MARITIME_AUTHOR_13' as TypeEnum,
    InsuranceBroke2: 'INSURANCE_BROKE_2' as TypeEnum,
    OppositeParty21: 'OPPOSITE_PARTY_21' as TypeEnum,
    ClaimReceiver22: 'CLAIM_RECEIVER_22' as TypeEnum,
    OneTimeVendor23: 'ONE_TIME_VENDOR_23' as TypeEnum,
    Cover3: 'COVER_3' as TypeEnum,
    QuotaShtreaty4: 'QUOTA_SHTREATY_4' as TypeEnum,
    CustomerDir5: 'CUSTOMER_DIR_5' as TypeEnum,
    Employee51: 'EMPLOYEE_51' as TypeEnum,
    Crew52: 'CREW_52' as TypeEnum,
    Association55: 'ASSOCIATION_55' as TypeEnum,
    SalesAgent6: 'SALES_AGENT_6' as TypeEnum,
    Agentoffice61: 'AGENTOFFICE_61' as TypeEnum,
    Agentemployee62: 'AGENTEMPLOYEE_62' as TypeEnum,
    Surveyor7: 'SURVEYOR_7' as TypeEnum,
    Mortgbank8: 'MORTGBANK_8' as TypeEnum,
    Organoffice81: 'ORGANOFFICE_81' as TypeEnum,
    Orgemployee82: 'ORGEMPLOYEE_82' as TypeEnum,
    Correspondent83: 'CORRESPONDENT_83' as TypeEnum,
    Region85: 'REGION_85' as TypeEnum,
    Mortgoffice86: 'MORTGOFFICE_86' as TypeEnum,
    Interim188: 'INTERIM_1_88' as TypeEnum,
    MortgageeCon9: 'MORTGAGEE_CON_9' as TypeEnum,
    OwnRetention91: 'OWN_RETENTION_91' as TypeEnum,
    Cutoff92: 'CUTOFF_92' as TypeEnum,
    OwnCommBr93: 'OWN_COMM_BR_93' as TypeEnum,
    TechnicalAddr94: 'TECHNICAL_ADDR_94' as TypeEnum,
    InterimAccount95: 'INTERIM_ACCOUNT_95' as TypeEnum,
    IngoingVat96: 'INGOING_VAT_96' as TypeEnum,
    OutgoingVat97: 'OUTGOING_VAT_97' as TypeEnum,
    Interim298: 'INTERIM_2_98' as TypeEnum,
    Other99: 'OTHER_99' as TypeEnum,
  };
  export type StatusEnum =
    | 'NORMAL_0'
    | 'EXPIRED_1'
    | 'DEAD_10'
    | 'CHANGED_COMPANY_2'
    | 'DISMISSED_CLAIM_3'
    | 'DISMISSED_PAYMT_4'
    | 'BANKRUPT_5'
    | 'SLOW_PAYER_6'
    | 'CUTOFF_7'
    | 'PREENTERED_89'
    | 'APPROVED_90'
    | 'LEGAL_RECOVERY_99';
  export const StatusEnum = {
    Normal0: 'NORMAL_0' as StatusEnum,
    Expired1: 'EXPIRED_1' as StatusEnum,
    Dead10: 'DEAD_10' as StatusEnum,
    ChangedCompany2: 'CHANGED_COMPANY_2' as StatusEnum,
    DismissedClaim3: 'DISMISSED_CLAIM_3' as StatusEnum,
    DismissedPaymt4: 'DISMISSED_PAYMT_4' as StatusEnum,
    Bankrupt5: 'BANKRUPT_5' as StatusEnum,
    SlowPayer6: 'SLOW_PAYER_6' as StatusEnum,
    Cutoff7: 'CUTOFF_7' as StatusEnum,
    Preentered89: 'PREENTERED_89' as StatusEnum,
    Approved90: 'APPROVED_90' as StatusEnum,
    LegalRecovery99: 'LEGAL_RECOVERY_99' as StatusEnum,
  };
}