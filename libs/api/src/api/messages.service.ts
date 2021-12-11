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

import { Message } from '../model/models';
import { SearchResultMessage } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
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
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public create9(
    body?: Message,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Message>;
  public create9(
    body?: Message,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Message>>;
  public create9(
    body?: Message,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Message>>;
  public create9(
    body?: Message,
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

    // to determine the Content-Type header
    const consumes: string[] = [];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Content-Type',
        httpContentTypeSelected
      );
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.post<Message>(
      `${this.configuration.basePath}/messages`,
      body,
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
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public get12(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<Message>;
  public get12(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<Message>>;
  public get12(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<Message>>;
  public get12(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get12.'
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

    return this.httpClient.get<Message>(
      `${this.configuration.basePath}/messages/${encodeURIComponent(
        String(id)
      )}`,
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
   * @param firstResult
   * @param maxResults
   * @param messageType
   * @param codeValue
   * @param person
   * @param fullText
   * @param text
   * @param status
   * @param includeRead
   * @param orderBy
   * @param orderByDirection
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCount2(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<number>;
  public getCount2(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<number>>;
  public getCount2(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<number>>;
  public getCount2(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (firstResult !== undefined && firstResult !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>firstResult,
        'firstResult'
      );
    }
    if (maxResults !== undefined && maxResults !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>maxResults,
        'maxResults'
      );
    }
    if (messageType !== undefined && messageType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>messageType,
        'messageType'
      );
    }
    if (codeValue !== undefined && codeValue !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>codeValue,
        'codeValue'
      );
    }
    if (person !== undefined && person !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>person,
        'person'
      );
    }
    if (fullText !== undefined && fullText !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>fullText,
        'fullText'
      );
    }
    if (text !== undefined && text !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>text,
        'text'
      );
    }
    if (status !== undefined && status !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>status,
        'status'
      );
    }
    if (includeRead !== undefined && includeRead !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>includeRead,
        'includeRead'
      );
    }
    if (orderBy !== undefined && orderBy !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>orderBy,
        'orderBy'
      );
    }
    if (orderByDirection !== undefined && orderByDirection !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>orderByDirection,
        'orderByDirection'
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

    return this.httpClient.get<number>(
      `${this.configuration.basePath}/messages/count`,
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
  public getUnreadCount(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<number>;
  public getUnreadCount(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<number>>;
  public getUnreadCount(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<number>>;
  public getUnreadCount(
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

    return this.httpClient.get<number>(
      `${this.configuration.basePath}/messages/unreadcount`,
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
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public markAsActive1(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any>;
  public markAsActive1(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public markAsActive1(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public markAsActive1(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling markAsActive1.'
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
      const httpHeaderAccepts: string[] = [];
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

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/messages/${encodeURIComponent(
        String(id)
      )}/markasactive`,
      null,
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
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public markAsRead(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any>;
  public markAsRead(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public markAsRead(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public markAsRead(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling markAsRead.'
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
      const httpHeaderAccepts: string[] = [];
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

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/messages/${encodeURIComponent(
        String(id)
      )}/markasread`,
      null,
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
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public markAsTreated1(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any>;
  public markAsTreated1(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public markAsTreated1(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public markAsTreated1(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling markAsTreated1.'
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
      const httpHeaderAccepts: string[] = [];
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

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/messages/${encodeURIComponent(
        String(id)
      )}/markastreated`,
      null,
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
   * @param firstResult
   * @param maxResults
   * @param messageType
   * @param codeValue
   * @param person
   * @param fullText
   * @param text
   * @param status
   * @param includeRead
   * @param orderBy
   * @param orderByDirection
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public search7(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<SearchResultMessage>;
  public search7(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<SearchResultMessage>>;
  public search7(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<SearchResultMessage>>;
  public search7(
    firstResult?: number,
    maxResults?: number,
    messageType?:
      | 'AGREEMENT_A'
      | 'OBJECT_B'
      | 'CLOSING_C'
      | 'COVERAGE_D'
      | 'SECTION_E'
      | 'DOCUMENT_F'
      | 'GENERAL_G'
      | 'BUDGET_H'
      | 'OPPONENTS_I'
      | 'INSURANCE_J'
      | 'EL_PAYMENT_L'
      | 'OFFER_MARINE_M'
      | 'OFFER_O'
      | 'PERSON_P'
      | 'PERSON_RESP_Q'
      | 'PREMIUM_R'
      | 'CLAIM_S'
      | 'ACCIDENT_T'
      | 'EMPLOYEE_W'
      | 'COMMUNICATION_X'
      | 'FORM_SUBMISSION_Y',
    codeValue?: string,
    person?: number,
    fullText?: string,
    text?: string,
    status?: 'ACTIVE_A' | 'CANCELLED_C' | 'HISTORY_H' | 'TREATED_T',
    includeRead?: boolean,
    orderBy?: 'CREATED' | 'UPDATED' | 'SUBJECT' | 'PERSON',
    orderByDirection?: 'ASC' | 'DESC',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (firstResult !== undefined && firstResult !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>firstResult,
        'firstResult'
      );
    }
    if (maxResults !== undefined && maxResults !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>maxResults,
        'maxResults'
      );
    }
    if (messageType !== undefined && messageType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>messageType,
        'messageType'
      );
    }
    if (codeValue !== undefined && codeValue !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>codeValue,
        'codeValue'
      );
    }
    if (person !== undefined && person !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>person,
        'person'
      );
    }
    if (fullText !== undefined && fullText !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>fullText,
        'fullText'
      );
    }
    if (text !== undefined && text !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>text,
        'text'
      );
    }
    if (status !== undefined && status !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>status,
        'status'
      );
    }
    if (includeRead !== undefined && includeRead !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>includeRead,
        'includeRead'
      );
    }
    if (orderBy !== undefined && orderBy !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>orderBy,
        'orderBy'
      );
    }
    if (orderByDirection !== undefined && orderByDirection !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>orderByDirection,
        'orderByDirection'
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

    return this.httpClient.get<SearchResultMessage>(
      `${this.configuration.basePath}/messages`,
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
