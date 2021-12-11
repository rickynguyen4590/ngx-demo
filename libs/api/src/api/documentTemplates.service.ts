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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { DocumentTemplate } from '../model/models';
import { DocumentTemplateWithText } from '../model/models';
import { FixedTextHeader } from '../model/models';
import { TextPlaceCode } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class DocumentTemplatesService {
  protected basePath = 'http://localhost/noria-dev/rest';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          );
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * @param type
   * @param outputFormat
   * @param interest
   * @param conditionCode
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCustomChildTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat: 'HTML_1' | 'TEXT_2',
    interest?: string,
    conditionCode?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Array<DocumentTemplate>>;
  public getCustomChildTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat: 'HTML_1' | 'TEXT_2',
    interest?: string,
    conditionCode?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Array<DocumentTemplate>>>;
  public getCustomChildTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat: 'HTML_1' | 'TEXT_2',
    interest?: string,
    conditionCode?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Array<DocumentTemplate>>>;
  public getCustomChildTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat: 'HTML_1' | 'TEXT_2',
    interest?: string,
    conditionCode?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (type === null || type === undefined) {
      throw new Error(
        'Required parameter type was null or undefined when calling getCustomChildTemplates1.'
      );
    }
    if (outputFormat === null || outputFormat === undefined) {
      throw new Error(
        'Required parameter outputFormat was null or undefined when calling getCustomChildTemplates1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (type !== undefined && type !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>type,
        'type'
      );
    }
    if (outputFormat !== undefined && outputFormat !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>outputFormat,
        'outputFormat'
      );
    }
    if (interest !== undefined && interest !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>interest,
        'interest'
      );
    }
    if (conditionCode !== undefined && conditionCode !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>conditionCode,
        'conditionCode'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (Authorization) required
    localVarCredential = this.configuration.lookupCredential('Authorization');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'Authorization',
        localVarCredential
      );
    }

    // authentication (paris-api-key) required
    localVarCredential = this.configuration.lookupCredential('paris-api-key');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'paris-api-key',
        localVarCredential
      );
    }

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.get<Array<DocumentTemplate>>(
      `${this.configuration.basePath}/documenttemplates/customchild`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param type
   * @param outputFormat
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCustomTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat?: 'HTML_1' | 'TEXT_2',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Array<DocumentTemplate>>;
  public getCustomTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat?: 'HTML_1' | 'TEXT_2',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Array<DocumentTemplate>>>;
  public getCustomTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat?: 'HTML_1' | 'TEXT_2',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Array<DocumentTemplate>>>;
  public getCustomTemplates1(
    type:
      | 'ARCHIVE_EMAIL_AE'
      | 'CLAUSES_CL'
      | 'DOC_NOTIFY_DN'
      | 'FREIGHT_O_EMAIL_FE'
      | 'FORM_NOTIFY_FN'
      | 'MSG_NOTIFY_MN'
      | 'POLICY_EMAIL_PE'
      | 'RESET_PW_EMAIL_RE'
      | 'TRIP_EMAIL_TE',
    outputFormat?: 'HTML_1' | 'TEXT_2',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (type === null || type === undefined) {
      throw new Error(
        'Required parameter type was null or undefined when calling getCustomTemplates1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (type !== undefined && type !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>type,
        'type'
      );
    }
    if (outputFormat !== undefined && outputFormat !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>outputFormat,
        'outputFormat'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (Authorization) required
    localVarCredential = this.configuration.lookupCredential('Authorization');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'Authorization',
        localVarCredential
      );
    }

    // authentication (paris-api-key) required
    localVarCredential = this.configuration.lookupCredential('paris-api-key');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'paris-api-key',
        localVarCredential
      );
    }

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.get<Array<DocumentTemplate>>(
      `${this.configuration.basePath}/documenttemplates/custom`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param includetext
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getDocumentTemplate1(
    id: string,
    includetext?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<DocumentTemplateWithText>;
  public getDocumentTemplate1(
    id: string,
    includetext?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<DocumentTemplateWithText>>;
  public getDocumentTemplate1(
    id: string,
    includetext?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<DocumentTemplateWithText>>;
  public getDocumentTemplate1(
    id: string,
    includetext?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getDocumentTemplate1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (includetext !== undefined && includetext !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>includetext,
        'includetext'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (Authorization) required
    localVarCredential = this.configuration.lookupCredential('Authorization');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'Authorization',
        localVarCredential
      );
    }

    // authentication (paris-api-key) required
    localVarCredential = this.configuration.lookupCredential('paris-api-key');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'paris-api-key',
        localVarCredential
      );
    }

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.get<DocumentTemplateWithText>(
      `${this.configuration.basePath}/documenttemplates/${encodeURIComponent(
        String(id)
      )}`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param formType
   * @param entityKey
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getDocumentTemplates1(
    formType:
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
      | 'PLACEHOLDER_ZZ',
    entityKey: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Array<DocumentTemplate>>;
  public getDocumentTemplates1(
    formType:
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
      | 'PLACEHOLDER_ZZ',
    entityKey: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Array<DocumentTemplate>>>;
  public getDocumentTemplates1(
    formType:
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
      | 'PLACEHOLDER_ZZ',
    entityKey: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Array<DocumentTemplate>>>;
  public getDocumentTemplates1(
    formType:
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
      | 'PLACEHOLDER_ZZ',
    entityKey: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (formType === null || formType === undefined) {
      throw new Error(
        'Required parameter formType was null or undefined when calling getDocumentTemplates1.'
      );
    }
    if (entityKey === null || entityKey === undefined) {
      throw new Error(
        'Required parameter entityKey was null or undefined when calling getDocumentTemplates1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (formType !== undefined && formType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>formType,
        'formType'
      );
    }
    if (entityKey !== undefined && entityKey !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>entityKey,
        'entityKey'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (Authorization) required
    localVarCredential = this.configuration.lookupCredential('Authorization');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'Authorization',
        localVarCredential
      );
    }

    // authentication (paris-api-key) required
    localVarCredential = this.configuration.lookupCredential('paris-api-key');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'paris-api-key',
        localVarCredential
      );
    }

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.get<Array<DocumentTemplate>>(
      `${this.configuration.basePath}/documenttemplates`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getFixedTextHeaders1(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Array<FixedTextHeader>>;
  public getFixedTextHeaders1(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Array<FixedTextHeader>>>;
  public getFixedTextHeaders1(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Array<FixedTextHeader>>>;
  public getFixedTextHeaders1(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (Authorization) required
    localVarCredential = this.configuration.lookupCredential('Authorization');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'Authorization',
        localVarCredential
      );
    }

    // authentication (paris-api-key) required
    localVarCredential = this.configuration.lookupCredential('paris-api-key');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'paris-api-key',
        localVarCredential
      );
    }

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.get<Array<FixedTextHeader>>(
      `${this.configuration.basePath}/documenttemplates/fixedtexts/headers`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param validity
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getTextPlaceCodes1(
    validity?: 'All' | 'ConditionSet',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Array<TextPlaceCode>>;
  public getTextPlaceCodes1(
    validity?: 'All' | 'ConditionSet',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Array<TextPlaceCode>>>;
  public getTextPlaceCodes1(
    validity?: 'All' | 'ConditionSet',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Array<TextPlaceCode>>>;
  public getTextPlaceCodes1(
    validity?: 'All' | 'ConditionSet',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (validity !== undefined && validity !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>validity,
        'validity'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarCredential: string | undefined;
    // authentication (Authorization) required
    localVarCredential = this.configuration.lookupCredential('Authorization');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'Authorization',
        localVarCredential
      );
    }

    // authentication (paris-api-key) required
    localVarCredential = this.configuration.lookupCredential('paris-api-key');
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set(
        'paris-api-key',
        localVarCredential
      );
    }

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.get<Array<TextPlaceCode>>(
      `${this.configuration.basePath}/documenttemplates/textplacecodes`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
