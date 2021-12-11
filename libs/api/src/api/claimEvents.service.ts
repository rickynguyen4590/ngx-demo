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

import { ClaimEvent } from '../model/models';
import { ClaimEventInitParams } from '../model/models';
import { SearchResultClaimEvent } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class ClaimEventsService {
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
  public create2(
    body?: ClaimEvent,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<ClaimEvent>;
  public create2(
    body?: ClaimEvent,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<ClaimEvent>>;
  public create2(
    body?: ClaimEvent,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<ClaimEvent>>;
  public create2(
    body?: ClaimEvent,
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

    return this.httpClient.post<ClaimEvent>(
      `${this.configuration.basePath}/claimevents`,
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
  public get2(
    id: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<ClaimEvent>;
  public get2(
    id: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<ClaimEvent>>;
  public get2(
    id: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<ClaimEvent>>;
  public get2(
    id: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get2.'
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

    return this.httpClient.get<ClaimEvent>(
      `${this.configuration.basePath}/claimevents/${encodeURIComponent(
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
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public init1(
    body?: ClaimEventInitParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<ClaimEvent>;
  public init1(
    body?: ClaimEventInitParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<ClaimEvent>>;
  public init1(
    body?: ClaimEventInitParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<ClaimEvent>>;
  public init1(
    body?: ClaimEventInitParams,
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

    return this.httpClient.post<ClaimEvent>(
      `${this.configuration.basePath}/claimevents/init`,
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
   * @param toClaimEventId
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public moveClaimsToEvent1(
    id: string,
    toClaimEventId: string,
    body?: Array<string>,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any>;
  public moveClaimsToEvent1(
    id: string,
    toClaimEventId: string,
    body?: Array<string>,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public moveClaimsToEvent1(
    id: string,
    toClaimEventId: string,
    body?: Array<string>,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public moveClaimsToEvent1(
    id: string,
    toClaimEventId: string,
    body?: Array<string>,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling moveClaimsToEvent1.'
      );
    }
    if (toClaimEventId === null || toClaimEventId === undefined) {
      throw new Error(
        'Required parameter toClaimEventId was null or undefined when calling moveClaimsToEvent1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (toClaimEventId !== undefined && toClaimEventId !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>toClaimEventId,
        'toClaimEventId'
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

    return this.httpClient.post<any>(
      `${this.configuration.basePath}/claimevents/${encodeURIComponent(
        String(id)
      )}/moveclaims`,
      body,
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
   * @param firstResult
   * @param maxResults
   * @param fromDate
   * @param toDate
   * @param superEvent
   * @param mainEvent
   * @param areaCode
   * @param location
   * @param eventNumber
   * @param agreementType
   * @param description
   * @param orderBy
   * @param orderByDirection
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public search1(
    firstResult?: number,
    maxResults?: number,
    fromDate?: string,
    toDate?: string,
    superEvent?:
      | 'COLLISION_1'
      | 'HEAVY_WEATHER_2'
      | 'FIREEXPLOSION_3'
      | 'XL_4'
      | 'OTHER_INCIDENT_9'
      | 'CARGO_A'
      | 'COLLISION_B'
      | 'CONTACT_C'
      | 'MACHEQUIPMENT_D'
      | 'DEFENCE_E'
      | 'FIREEXPLOSION_F'
      | 'GROUNDING_G'
      | 'HULLSTRUCTFAILU_H'
      | 'POLLUTION_J'
      | 'LOSS_OF_STABILI_L'
      | 'WLL_INCIDENT_M'
      | 'NOT_RELEVANT_N'
      | 'PERSON_P'
      | 'SURVEXAMQUERY_S'
      | 'WEATHERNATDIS_W'
      | 'NOT_IN_19_X'
      | 'OTHER_Z',
    mainEvent?: string,
    areaCode?: string,
    location?: string,
    eventNumber?: number,
    agreementType?:
      | 'MARINE_1'
      | 'AQUACULTURE_10'
      | 'PI_11'
      | 'ENERGY_2'
      | 'OIL_COMPANY_21'
      | 'CARGO_3'
      | 'PROPERTY_4'
      | 'AVIATION_5'
      | 'PRIVATE_50'
      | 'WAR_6'
      | 'NON_MARINE_7'
      | 'COASTAL_MARINE_8'
      | 'BUILDERS_RISK_9',
    description?: string,
    orderBy?:
      | 'EVENT_ID'
      | 'EVENT_DATE'
      | 'EVENT_NUMBER'
      | 'SUPER_EVENT'
      | 'MAIN_EVENT'
      | 'AREA_CODE'
      | 'AGREEMENT_TYPE'
      | 'DESCRIPTION',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<SearchResultClaimEvent>;
  public search1(
    firstResult?: number,
    maxResults?: number,
    fromDate?: string,
    toDate?: string,
    superEvent?:
      | 'COLLISION_1'
      | 'HEAVY_WEATHER_2'
      | 'FIREEXPLOSION_3'
      | 'XL_4'
      | 'OTHER_INCIDENT_9'
      | 'CARGO_A'
      | 'COLLISION_B'
      | 'CONTACT_C'
      | 'MACHEQUIPMENT_D'
      | 'DEFENCE_E'
      | 'FIREEXPLOSION_F'
      | 'GROUNDING_G'
      | 'HULLSTRUCTFAILU_H'
      | 'POLLUTION_J'
      | 'LOSS_OF_STABILI_L'
      | 'WLL_INCIDENT_M'
      | 'NOT_RELEVANT_N'
      | 'PERSON_P'
      | 'SURVEXAMQUERY_S'
      | 'WEATHERNATDIS_W'
      | 'NOT_IN_19_X'
      | 'OTHER_Z',
    mainEvent?: string,
    areaCode?: string,
    location?: string,
    eventNumber?: number,
    agreementType?:
      | 'MARINE_1'
      | 'AQUACULTURE_10'
      | 'PI_11'
      | 'ENERGY_2'
      | 'OIL_COMPANY_21'
      | 'CARGO_3'
      | 'PROPERTY_4'
      | 'AVIATION_5'
      | 'PRIVATE_50'
      | 'WAR_6'
      | 'NON_MARINE_7'
      | 'COASTAL_MARINE_8'
      | 'BUILDERS_RISK_9',
    description?: string,
    orderBy?:
      | 'EVENT_ID'
      | 'EVENT_DATE'
      | 'EVENT_NUMBER'
      | 'SUPER_EVENT'
      | 'MAIN_EVENT'
      | 'AREA_CODE'
      | 'AGREEMENT_TYPE'
      | 'DESCRIPTION',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<SearchResultClaimEvent>>;
  public search1(
    firstResult?: number,
    maxResults?: number,
    fromDate?: string,
    toDate?: string,
    superEvent?:
      | 'COLLISION_1'
      | 'HEAVY_WEATHER_2'
      | 'FIREEXPLOSION_3'
      | 'XL_4'
      | 'OTHER_INCIDENT_9'
      | 'CARGO_A'
      | 'COLLISION_B'
      | 'CONTACT_C'
      | 'MACHEQUIPMENT_D'
      | 'DEFENCE_E'
      | 'FIREEXPLOSION_F'
      | 'GROUNDING_G'
      | 'HULLSTRUCTFAILU_H'
      | 'POLLUTION_J'
      | 'LOSS_OF_STABILI_L'
      | 'WLL_INCIDENT_M'
      | 'NOT_RELEVANT_N'
      | 'PERSON_P'
      | 'SURVEXAMQUERY_S'
      | 'WEATHERNATDIS_W'
      | 'NOT_IN_19_X'
      | 'OTHER_Z',
    mainEvent?: string,
    areaCode?: string,
    location?: string,
    eventNumber?: number,
    agreementType?:
      | 'MARINE_1'
      | 'AQUACULTURE_10'
      | 'PI_11'
      | 'ENERGY_2'
      | 'OIL_COMPANY_21'
      | 'CARGO_3'
      | 'PROPERTY_4'
      | 'AVIATION_5'
      | 'PRIVATE_50'
      | 'WAR_6'
      | 'NON_MARINE_7'
      | 'COASTAL_MARINE_8'
      | 'BUILDERS_RISK_9',
    description?: string,
    orderBy?:
      | 'EVENT_ID'
      | 'EVENT_DATE'
      | 'EVENT_NUMBER'
      | 'SUPER_EVENT'
      | 'MAIN_EVENT'
      | 'AREA_CODE'
      | 'AGREEMENT_TYPE'
      | 'DESCRIPTION',
    orderByDirection?: 'ASC' | 'DESC',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<SearchResultClaimEvent>>;
  public search1(
    firstResult?: number,
    maxResults?: number,
    fromDate?: string,
    toDate?: string,
    superEvent?:
      | 'COLLISION_1'
      | 'HEAVY_WEATHER_2'
      | 'FIREEXPLOSION_3'
      | 'XL_4'
      | 'OTHER_INCIDENT_9'
      | 'CARGO_A'
      | 'COLLISION_B'
      | 'CONTACT_C'
      | 'MACHEQUIPMENT_D'
      | 'DEFENCE_E'
      | 'FIREEXPLOSION_F'
      | 'GROUNDING_G'
      | 'HULLSTRUCTFAILU_H'
      | 'POLLUTION_J'
      | 'LOSS_OF_STABILI_L'
      | 'WLL_INCIDENT_M'
      | 'NOT_RELEVANT_N'
      | 'PERSON_P'
      | 'SURVEXAMQUERY_S'
      | 'WEATHERNATDIS_W'
      | 'NOT_IN_19_X'
      | 'OTHER_Z',
    mainEvent?: string,
    areaCode?: string,
    location?: string,
    eventNumber?: number,
    agreementType?:
      | 'MARINE_1'
      | 'AQUACULTURE_10'
      | 'PI_11'
      | 'ENERGY_2'
      | 'OIL_COMPANY_21'
      | 'CARGO_3'
      | 'PROPERTY_4'
      | 'AVIATION_5'
      | 'PRIVATE_50'
      | 'WAR_6'
      | 'NON_MARINE_7'
      | 'COASTAL_MARINE_8'
      | 'BUILDERS_RISK_9',
    description?: string,
    orderBy?:
      | 'EVENT_ID'
      | 'EVENT_DATE'
      | 'EVENT_NUMBER'
      | 'SUPER_EVENT'
      | 'MAIN_EVENT'
      | 'AREA_CODE'
      | 'AGREEMENT_TYPE'
      | 'DESCRIPTION',
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
    if (fromDate !== undefined && fromDate !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>fromDate,
        'fromDate'
      );
    }
    if (toDate !== undefined && toDate !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>toDate,
        'toDate'
      );
    }
    if (superEvent !== undefined && superEvent !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>superEvent,
        'superEvent'
      );
    }
    if (mainEvent !== undefined && mainEvent !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>mainEvent,
        'mainEvent'
      );
    }
    if (areaCode !== undefined && areaCode !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>areaCode,
        'areaCode'
      );
    }
    if (location !== undefined && location !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>location,
        'location'
      );
    }
    if (eventNumber !== undefined && eventNumber !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>eventNumber,
        'eventNumber'
      );
    }
    if (agreementType !== undefined && agreementType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>agreementType,
        'agreementType'
      );
    }
    if (description !== undefined && description !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>description,
        'description'
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

    return this.httpClient.get<SearchResultClaimEvent>(
      `${this.configuration.basePath}/claimevents`,
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
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public update1(
    body?: ClaimEvent,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<ClaimEvent>;
  public update1(
    body?: ClaimEvent,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<ClaimEvent>>;
  public update1(
    body?: ClaimEvent,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<ClaimEvent>>;
  public update1(
    body?: ClaimEvent,
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

    return this.httpClient.put<ClaimEvent>(
      `${this.configuration.basePath}/claimevents`,
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
}