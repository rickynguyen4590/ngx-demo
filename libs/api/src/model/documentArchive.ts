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
import { SimplePerson } from './simplePerson';

export interface DocumentArchive {
  id?: number;
  documentNumber?: number;
  name?: string;
  description?: string;
  reference?: string;
  displayName?: string;
  mimeType?: string;
  mimeSubType?: string;
  status?: DocumentArchive.StatusEnum;
  year?: number;
  viewable?: boolean;
  canView?: boolean;
  formType?: DocumentArchive.FormTypeEnum;
  agreementNumber?: number;
  agreementName?: string;
  insuredObjectNumber?: number;
  insuredObjectName?: string;
  created?: string;
  createdBy?: string;
  lastUpdated?: string;
  lastUpdatedBy?: string;
  category?: string;
  personId?: number;
  personName?: string;
  employee?: SimplePerson;
  approvalStatus?: DocumentArchive.ApprovalStatusEnum;
  documentSignatureStatus?: DocumentArchive.DocumentSignatureStatusEnum;
  approved?: string;
  approvedBy?: string;
  electronic?: boolean;
  externalId?: string;
  interests?: Array<string>;
  toBeSignedBy1?: string;
  signedBy1?: string;
  signedDate1?: string;
  toBeSignedBy2?: string;
  signedBy2?: string;
  signedDate2?: string;
  folderId?: number;
}
export namespace DocumentArchive {
  export type StatusEnum = 'ACTIVE_A' | 'CANCELLED_C' | 'REPLACED_R' | 'WORK_W';
  export const StatusEnum = {
    ActiveA: 'ACTIVE_A' as StatusEnum,
    CancelledC: 'CANCELLED_C' as StatusEnum,
    ReplacedR: 'REPLACED_R' as StatusEnum,
    WorkW: 'WORK_W' as StatusEnum,
  };
  export type FormTypeEnum =
    | 'CTRL_PAYMENTS___'
    | 'ACCOUNT_DOC_AD'
    | 'ACCOUNT_EXPORT_AE'
    | 'AVTALEGIRO_AG'
    | 'ACCOUNT_LIST_AL'
    | 'ATTACHMENT_AT'
    | 'AD_BORD_BA'
    | 'CLOSE_BORD_BC'
    | 'CORR_BORD_BK'
    | 'CLAIM_BORD_BL'
    | 'CLAIM_ADVICE_BM'
    | 'PROV_BORD_BP'
    | 'CANCEL_BS'
    | 'ADD_BORD_BV'
    | 'CANCEL_CA'
    | 'COVER_CREW_NOTE_CC'
    | 'CREW_DISCLETTE_CD'
    | 'COVNOTE_EXTRACT_CE'
    | 'CREWLIST_GEN_CG'
    | 'CLAIM_INVOICE_CI'
    | 'CLMCTRL_CK'
    | 'COVER_NOTE_CN'
    | 'CHANGE_OBJ_CO'
    | 'CREW_SETTLEMENT_CS'
    | 'DEBIT_AGENTNOTE_DA'
    | 'COV_DECLARATION_DE'
    | 'DEDUCT_INVOICE_DI'
    | 'INVOICE_DN'
    | 'IMP_ELBORD_EB'
    | 'E_INVOICE_EI'
    | 'ELREMIT_EL'
    | 'FREIGHT_O_CERTI_FC'
    | 'SINGLE_GIRO_GI'
    | 'GIRO_NOTE_GN'
    | 'INTRST_CALC_IC'
    | 'CREDIT_ADVICE_IG'
    | 'INFO_CLAIM_IL'
    | 'INS_INFO_IN'
    | 'INFO_PREMIUM_IP'
    | 'AGREEM_LETTER_LA'
    | 'BENEFIC_LETTER_LB'
    | 'CLAIM_LETTER_LC'
    | 'CLM_ING_INV_LTR_LD'
    | 'LETTER_LE'
    | 'INSURANCELETTER_LI'
    | 'CREW_LETTER_LM'
    | 'CLAIM_PAYMLETT_LP'
    | 'LEGAL_RECOVERY_LR'
    | 'CERTIFICATE_LS'
    | 'LETTER_EXPIRE_LX'
    | 'LETTER_MORTGAAG_LY'
    | 'LETTER_SECURITY_LZ'
    | 'COASTAL_OFFER_MC'
    | 'MAIL_CONFIRMAT_ML'
    | 'MARINE_OFFER_MM'
    | 'MAIL_EML_FILE_MP'
    | 'NEW_PERSON_NP'
    | 'OCR_IMPORT_OC'
    | 'DEBIT_ADVICE_OG'
    | 'PERIODICAL_PAY_P_'
    | 'PAYMENT_ADVICE_PA'
    | 'PRES_TO_CLIENT_PC'
    | 'PERSON_DOCUMENT_PE'
    | 'PL_REMINDER_PL'
    | 'PAYMENT_PM'
    | 'PERSON_OFFER_PO'
    | 'PRINT_DRAFT_PP'
    | 'STATEMENT_PS'
    | 'TECHN_STMT_PT'
    | 'PREM_WAIVER_PW'
    | 'REQ_FOR_QUOTE_QU'
    | '_1REMINDER_R1'
    | '_2REMINDER_R2'
    | '_3REMINDER_R3'
    | '_4REMINDER_R4'
    | '_7REMINDER_R7'
    | '_8REMINDER_R8'
    | '_9REMINDER_R9'
    | 'CREDIT_NOTE_RC'
    | 'REMARK_RE'
    | 'MAX_NOTE_RM'
    | 'REMINDER_NOTE_RN'
    | 'ONLINE_NOTE_RO'
    | 'STATMENT_PREMIU_RP'
    | 'STATMENT_CLAIM_RQ'
    | 'PERSAC_LETTER_RS'
    | 'EXPIRE_REMINDER_RX'
    | 'SLIP_SL'
    | 'SYSTEM_MESSAGE_SM'
    | 'SLOW_PAYER_SP'
    | 'SYSTEM_SY'
    | 'TRIP_IMPORT_TI'
    | 'TAX_TFA_TT'
    | 'TAX_DOC_TX'
    | 'EXCEL_EXPORT_XL'
    | 'PLACEHOLDER_ZZ';
  export const FormTypeEnum = {
    CtrlPayments: 'CTRL_PAYMENTS___' as FormTypeEnum,
    AccountDocAd: 'ACCOUNT_DOC_AD' as FormTypeEnum,
    AccountExportAe: 'ACCOUNT_EXPORT_AE' as FormTypeEnum,
    AvtalegiroAg: 'AVTALEGIRO_AG' as FormTypeEnum,
    AccountListAl: 'ACCOUNT_LIST_AL' as FormTypeEnum,
    AttachmentAt: 'ATTACHMENT_AT' as FormTypeEnum,
    AdBordBa: 'AD_BORD_BA' as FormTypeEnum,
    CloseBordBc: 'CLOSE_BORD_BC' as FormTypeEnum,
    CorrBordBk: 'CORR_BORD_BK' as FormTypeEnum,
    ClaimBordBl: 'CLAIM_BORD_BL' as FormTypeEnum,
    ClaimAdviceBm: 'CLAIM_ADVICE_BM' as FormTypeEnum,
    ProvBordBp: 'PROV_BORD_BP' as FormTypeEnum,
    CancelBs: 'CANCEL_BS' as FormTypeEnum,
    AddBordBv: 'ADD_BORD_BV' as FormTypeEnum,
    CancelCa: 'CANCEL_CA' as FormTypeEnum,
    CoverCrewNoteCc: 'COVER_CREW_NOTE_CC' as FormTypeEnum,
    CrewDiscletteCd: 'CREW_DISCLETTE_CD' as FormTypeEnum,
    CovnoteExtractCe: 'COVNOTE_EXTRACT_CE' as FormTypeEnum,
    CrewlistGenCg: 'CREWLIST_GEN_CG' as FormTypeEnum,
    ClaimInvoiceCi: 'CLAIM_INVOICE_CI' as FormTypeEnum,
    ClmctrlCk: 'CLMCTRL_CK' as FormTypeEnum,
    CoverNoteCn: 'COVER_NOTE_CN' as FormTypeEnum,
    ChangeObjCo: 'CHANGE_OBJ_CO' as FormTypeEnum,
    CrewSettlementCs: 'CREW_SETTLEMENT_CS' as FormTypeEnum,
    DebitAgentnoteDa: 'DEBIT_AGENTNOTE_DA' as FormTypeEnum,
    CovDeclarationDe: 'COV_DECLARATION_DE' as FormTypeEnum,
    DeductInvoiceDi: 'DEDUCT_INVOICE_DI' as FormTypeEnum,
    InvoiceDn: 'INVOICE_DN' as FormTypeEnum,
    ImpElbordEb: 'IMP_ELBORD_EB' as FormTypeEnum,
    EInvoiceEi: 'E_INVOICE_EI' as FormTypeEnum,
    ElremitEl: 'ELREMIT_EL' as FormTypeEnum,
    FreightOCertiFc: 'FREIGHT_O_CERTI_FC' as FormTypeEnum,
    SingleGiroGi: 'SINGLE_GIRO_GI' as FormTypeEnum,
    GiroNoteGn: 'GIRO_NOTE_GN' as FormTypeEnum,
    IntrstCalcIc: 'INTRST_CALC_IC' as FormTypeEnum,
    CreditAdviceIg: 'CREDIT_ADVICE_IG' as FormTypeEnum,
    InfoClaimIl: 'INFO_CLAIM_IL' as FormTypeEnum,
    InsInfoIn: 'INS_INFO_IN' as FormTypeEnum,
    InfoPremiumIp: 'INFO_PREMIUM_IP' as FormTypeEnum,
    AgreemLetterLa: 'AGREEM_LETTER_LA' as FormTypeEnum,
    BeneficLetterLb: 'BENEFIC_LETTER_LB' as FormTypeEnum,
    ClaimLetterLc: 'CLAIM_LETTER_LC' as FormTypeEnum,
    ClmIngInvLtrLd: 'CLM_ING_INV_LTR_LD' as FormTypeEnum,
    LetterLe: 'LETTER_LE' as FormTypeEnum,
    InsuranceletterLi: 'INSURANCELETTER_LI' as FormTypeEnum,
    CrewLetterLm: 'CREW_LETTER_LM' as FormTypeEnum,
    ClaimPaymlettLp: 'CLAIM_PAYMLETT_LP' as FormTypeEnum,
    LegalRecoveryLr: 'LEGAL_RECOVERY_LR' as FormTypeEnum,
    CertificateLs: 'CERTIFICATE_LS' as FormTypeEnum,
    LetterExpireLx: 'LETTER_EXPIRE_LX' as FormTypeEnum,
    LetterMortgaagLy: 'LETTER_MORTGAAG_LY' as FormTypeEnum,
    LetterSecurityLz: 'LETTER_SECURITY_LZ' as FormTypeEnum,
    CoastalOfferMc: 'COASTAL_OFFER_MC' as FormTypeEnum,
    MailConfirmatMl: 'MAIL_CONFIRMAT_ML' as FormTypeEnum,
    MarineOfferMm: 'MARINE_OFFER_MM' as FormTypeEnum,
    MailEmlFileMp: 'MAIL_EML_FILE_MP' as FormTypeEnum,
    NewPersonNp: 'NEW_PERSON_NP' as FormTypeEnum,
    OcrImportOc: 'OCR_IMPORT_OC' as FormTypeEnum,
    DebitAdviceOg: 'DEBIT_ADVICE_OG' as FormTypeEnum,
    PeriodicalPayP: 'PERIODICAL_PAY_P_' as FormTypeEnum,
    PaymentAdvicePa: 'PAYMENT_ADVICE_PA' as FormTypeEnum,
    PresToClientPc: 'PRES_TO_CLIENT_PC' as FormTypeEnum,
    PersonDocumentPe: 'PERSON_DOCUMENT_PE' as FormTypeEnum,
    PlReminderPl: 'PL_REMINDER_PL' as FormTypeEnum,
    PaymentPm: 'PAYMENT_PM' as FormTypeEnum,
    PersonOfferPo: 'PERSON_OFFER_PO' as FormTypeEnum,
    PrintDraftPp: 'PRINT_DRAFT_PP' as FormTypeEnum,
    StatementPs: 'STATEMENT_PS' as FormTypeEnum,
    TechnStmtPt: 'TECHN_STMT_PT' as FormTypeEnum,
    PremWaiverPw: 'PREM_WAIVER_PW' as FormTypeEnum,
    ReqForQuoteQu: 'REQ_FOR_QUOTE_QU' as FormTypeEnum,
    _1ReminderR1: '_1REMINDER_R1' as FormTypeEnum,
    _2ReminderR2: '_2REMINDER_R2' as FormTypeEnum,
    _3ReminderR3: '_3REMINDER_R3' as FormTypeEnum,
    _4ReminderR4: '_4REMINDER_R4' as FormTypeEnum,
    _7ReminderR7: '_7REMINDER_R7' as FormTypeEnum,
    _8ReminderR8: '_8REMINDER_R8' as FormTypeEnum,
    _9ReminderR9: '_9REMINDER_R9' as FormTypeEnum,
    CreditNoteRc: 'CREDIT_NOTE_RC' as FormTypeEnum,
    RemarkRe: 'REMARK_RE' as FormTypeEnum,
    MaxNoteRm: 'MAX_NOTE_RM' as FormTypeEnum,
    ReminderNoteRn: 'REMINDER_NOTE_RN' as FormTypeEnum,
    OnlineNoteRo: 'ONLINE_NOTE_RO' as FormTypeEnum,
    StatmentPremiuRp: 'STATMENT_PREMIU_RP' as FormTypeEnum,
    StatmentClaimRq: 'STATMENT_CLAIM_RQ' as FormTypeEnum,
    PersacLetterRs: 'PERSAC_LETTER_RS' as FormTypeEnum,
    ExpireReminderRx: 'EXPIRE_REMINDER_RX' as FormTypeEnum,
    SlipSl: 'SLIP_SL' as FormTypeEnum,
    SystemMessageSm: 'SYSTEM_MESSAGE_SM' as FormTypeEnum,
    SlowPayerSp: 'SLOW_PAYER_SP' as FormTypeEnum,
    SystemSy: 'SYSTEM_SY' as FormTypeEnum,
    TripImportTi: 'TRIP_IMPORT_TI' as FormTypeEnum,
    TaxTfaTt: 'TAX_TFA_TT' as FormTypeEnum,
    TaxDocTx: 'TAX_DOC_TX' as FormTypeEnum,
    ExcelExportXl: 'EXCEL_EXPORT_XL' as FormTypeEnum,
    PlaceholderZz: 'PLACEHOLDER_ZZ' as FormTypeEnum,
  };
  export type ApprovalStatusEnum =
    | 'APPROVED_A'
    | 'DENIED_D'
    | 'NEVER_N'
    | 'TO_BE_APPROVED_T';
  export const ApprovalStatusEnum = {
    ApprovedA: 'APPROVED_A' as ApprovalStatusEnum,
    DeniedD: 'DENIED_D' as ApprovalStatusEnum,
    NeverN: 'NEVER_N' as ApprovalStatusEnum,
    ToBeApprovedT: 'TO_BE_APPROVED_T' as ApprovalStatusEnum,
  };
  export type DocumentSignatureStatusEnum =
    | 'SIG_NOT_REQ_N'
    | 'REJECTED_R'
    | 'SIGNED_S'
    | 'TO_BE_SIGNED_T';
  export const DocumentSignatureStatusEnum = {
    SigNotReqN: 'SIG_NOT_REQ_N' as DocumentSignatureStatusEnum,
    RejectedR: 'REJECTED_R' as DocumentSignatureStatusEnum,
    SignedS: 'SIGNED_S' as DocumentSignatureStatusEnum,
    ToBeSignedT: 'TO_BE_SIGNED_T' as DocumentSignatureStatusEnum,
  };
}
