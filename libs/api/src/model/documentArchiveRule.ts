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

export interface DocumentArchiveRule {
  documentType?: DocumentArchiveRule.DocumentTypeEnum;
  defaultCategory?: string;
}
export namespace DocumentArchiveRule {
  export type DocumentTypeEnum =
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
  export const DocumentTypeEnum = {
    CtrlPayments: 'CTRL_PAYMENTS___' as DocumentTypeEnum,
    AccountDocAd: 'ACCOUNT_DOC_AD' as DocumentTypeEnum,
    AccountExportAe: 'ACCOUNT_EXPORT_AE' as DocumentTypeEnum,
    AvtalegiroAg: 'AVTALEGIRO_AG' as DocumentTypeEnum,
    AccountListAl: 'ACCOUNT_LIST_AL' as DocumentTypeEnum,
    AttachmentAt: 'ATTACHMENT_AT' as DocumentTypeEnum,
    AdBordBa: 'AD_BORD_BA' as DocumentTypeEnum,
    CloseBordBc: 'CLOSE_BORD_BC' as DocumentTypeEnum,
    CorrBordBk: 'CORR_BORD_BK' as DocumentTypeEnum,
    ClaimBordBl: 'CLAIM_BORD_BL' as DocumentTypeEnum,
    ClaimAdviceBm: 'CLAIM_ADVICE_BM' as DocumentTypeEnum,
    ProvBordBp: 'PROV_BORD_BP' as DocumentTypeEnum,
    CancelBs: 'CANCEL_BS' as DocumentTypeEnum,
    AddBordBv: 'ADD_BORD_BV' as DocumentTypeEnum,
    CancelCa: 'CANCEL_CA' as DocumentTypeEnum,
    CoverCrewNoteCc: 'COVER_CREW_NOTE_CC' as DocumentTypeEnum,
    CrewDiscletteCd: 'CREW_DISCLETTE_CD' as DocumentTypeEnum,
    CovnoteExtractCe: 'COVNOTE_EXTRACT_CE' as DocumentTypeEnum,
    CrewlistGenCg: 'CREWLIST_GEN_CG' as DocumentTypeEnum,
    ClaimInvoiceCi: 'CLAIM_INVOICE_CI' as DocumentTypeEnum,
    ClmctrlCk: 'CLMCTRL_CK' as DocumentTypeEnum,
    CoverNoteCn: 'COVER_NOTE_CN' as DocumentTypeEnum,
    ChangeObjCo: 'CHANGE_OBJ_CO' as DocumentTypeEnum,
    CrewSettlementCs: 'CREW_SETTLEMENT_CS' as DocumentTypeEnum,
    DebitAgentnoteDa: 'DEBIT_AGENTNOTE_DA' as DocumentTypeEnum,
    CovDeclarationDe: 'COV_DECLARATION_DE' as DocumentTypeEnum,
    DeductInvoiceDi: 'DEDUCT_INVOICE_DI' as DocumentTypeEnum,
    InvoiceDn: 'INVOICE_DN' as DocumentTypeEnum,
    ImpElbordEb: 'IMP_ELBORD_EB' as DocumentTypeEnum,
    EInvoiceEi: 'E_INVOICE_EI' as DocumentTypeEnum,
    ElremitEl: 'ELREMIT_EL' as DocumentTypeEnum,
    FreightOCertiFc: 'FREIGHT_O_CERTI_FC' as DocumentTypeEnum,
    SingleGiroGi: 'SINGLE_GIRO_GI' as DocumentTypeEnum,
    GiroNoteGn: 'GIRO_NOTE_GN' as DocumentTypeEnum,
    IntrstCalcIc: 'INTRST_CALC_IC' as DocumentTypeEnum,
    CreditAdviceIg: 'CREDIT_ADVICE_IG' as DocumentTypeEnum,
    InfoClaimIl: 'INFO_CLAIM_IL' as DocumentTypeEnum,
    InsInfoIn: 'INS_INFO_IN' as DocumentTypeEnum,
    InfoPremiumIp: 'INFO_PREMIUM_IP' as DocumentTypeEnum,
    AgreemLetterLa: 'AGREEM_LETTER_LA' as DocumentTypeEnum,
    BeneficLetterLb: 'BENEFIC_LETTER_LB' as DocumentTypeEnum,
    ClaimLetterLc: 'CLAIM_LETTER_LC' as DocumentTypeEnum,
    ClmIngInvLtrLd: 'CLM_ING_INV_LTR_LD' as DocumentTypeEnum,
    LetterLe: 'LETTER_LE' as DocumentTypeEnum,
    InsuranceletterLi: 'INSURANCELETTER_LI' as DocumentTypeEnum,
    CrewLetterLm: 'CREW_LETTER_LM' as DocumentTypeEnum,
    ClaimPaymlettLp: 'CLAIM_PAYMLETT_LP' as DocumentTypeEnum,
    LegalRecoveryLr: 'LEGAL_RECOVERY_LR' as DocumentTypeEnum,
    CertificateLs: 'CERTIFICATE_LS' as DocumentTypeEnum,
    LetterExpireLx: 'LETTER_EXPIRE_LX' as DocumentTypeEnum,
    LetterMortgaagLy: 'LETTER_MORTGAAG_LY' as DocumentTypeEnum,
    LetterSecurityLz: 'LETTER_SECURITY_LZ' as DocumentTypeEnum,
    CoastalOfferMc: 'COASTAL_OFFER_MC' as DocumentTypeEnum,
    MailConfirmatMl: 'MAIL_CONFIRMAT_ML' as DocumentTypeEnum,
    MarineOfferMm: 'MARINE_OFFER_MM' as DocumentTypeEnum,
    MailEmlFileMp: 'MAIL_EML_FILE_MP' as DocumentTypeEnum,
    NewPersonNp: 'NEW_PERSON_NP' as DocumentTypeEnum,
    OcrImportOc: 'OCR_IMPORT_OC' as DocumentTypeEnum,
    DebitAdviceOg: 'DEBIT_ADVICE_OG' as DocumentTypeEnum,
    PeriodicalPayP: 'PERIODICAL_PAY_P_' as DocumentTypeEnum,
    PaymentAdvicePa: 'PAYMENT_ADVICE_PA' as DocumentTypeEnum,
    PresToClientPc: 'PRES_TO_CLIENT_PC' as DocumentTypeEnum,
    PersonDocumentPe: 'PERSON_DOCUMENT_PE' as DocumentTypeEnum,
    PlReminderPl: 'PL_REMINDER_PL' as DocumentTypeEnum,
    PaymentPm: 'PAYMENT_PM' as DocumentTypeEnum,
    PersonOfferPo: 'PERSON_OFFER_PO' as DocumentTypeEnum,
    PrintDraftPp: 'PRINT_DRAFT_PP' as DocumentTypeEnum,
    StatementPs: 'STATEMENT_PS' as DocumentTypeEnum,
    TechnStmtPt: 'TECHN_STMT_PT' as DocumentTypeEnum,
    PremWaiverPw: 'PREM_WAIVER_PW' as DocumentTypeEnum,
    ReqForQuoteQu: 'REQ_FOR_QUOTE_QU' as DocumentTypeEnum,
    _1ReminderR1: '_1REMINDER_R1' as DocumentTypeEnum,
    _2ReminderR2: '_2REMINDER_R2' as DocumentTypeEnum,
    _3ReminderR3: '_3REMINDER_R3' as DocumentTypeEnum,
    _4ReminderR4: '_4REMINDER_R4' as DocumentTypeEnum,
    _7ReminderR7: '_7REMINDER_R7' as DocumentTypeEnum,
    _8ReminderR8: '_8REMINDER_R8' as DocumentTypeEnum,
    _9ReminderR9: '_9REMINDER_R9' as DocumentTypeEnum,
    CreditNoteRc: 'CREDIT_NOTE_RC' as DocumentTypeEnum,
    RemarkRe: 'REMARK_RE' as DocumentTypeEnum,
    MaxNoteRm: 'MAX_NOTE_RM' as DocumentTypeEnum,
    ReminderNoteRn: 'REMINDER_NOTE_RN' as DocumentTypeEnum,
    OnlineNoteRo: 'ONLINE_NOTE_RO' as DocumentTypeEnum,
    StatmentPremiuRp: 'STATMENT_PREMIU_RP' as DocumentTypeEnum,
    StatmentClaimRq: 'STATMENT_CLAIM_RQ' as DocumentTypeEnum,
    PersacLetterRs: 'PERSAC_LETTER_RS' as DocumentTypeEnum,
    ExpireReminderRx: 'EXPIRE_REMINDER_RX' as DocumentTypeEnum,
    SlipSl: 'SLIP_SL' as DocumentTypeEnum,
    SystemMessageSm: 'SYSTEM_MESSAGE_SM' as DocumentTypeEnum,
    SlowPayerSp: 'SLOW_PAYER_SP' as DocumentTypeEnum,
    SystemSy: 'SYSTEM_SY' as DocumentTypeEnum,
    TripImportTi: 'TRIP_IMPORT_TI' as DocumentTypeEnum,
    TaxTfaTt: 'TAX_TFA_TT' as DocumentTypeEnum,
    TaxDocTx: 'TAX_DOC_TX' as DocumentTypeEnum,
    ExcelExportXl: 'EXCEL_EXPORT_XL' as DocumentTypeEnum,
    PlaceholderZz: 'PLACEHOLDER_ZZ' as DocumentTypeEnum,
  };
}