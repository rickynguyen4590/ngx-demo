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

import { SearchResultMember } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class PolicyCoversService {
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
   * @param firstResult
   * @param maxResults
   * @param policyFrameIds
   * @param activeOnly
   * @param orderBy
   * @param orderByDirection
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getMembers1(
    firstResult?: number,
    maxResults?: number,
    policyFrameIds?: Array<string>,
    activeOnly?: boolean,
    orderBy?: Array<'PERSON_NAME' | 'PERSON_SSN' | 'START_DATE' | 'END_DATE'>,
    orderByDirection?: Array<'ASC' | 'DESC'>,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<SearchResultMember>;
  public getMembers1(
    firstResult?: number,
    maxResults?: number,
    policyFrameIds?: Array<string>,
    activeOnly?: boolean,
    orderBy?: Array<'PERSON_NAME' | 'PERSON_SSN' | 'START_DATE' | 'END_DATE'>,
    orderByDirection?: Array<'ASC' | 'DESC'>,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<SearchResultMember>>;
  public getMembers1(
    firstResult?: number,
    maxResults?: number,
    policyFrameIds?: Array<string>,
    activeOnly?: boolean,
    orderBy?: Array<'PERSON_NAME' | 'PERSON_SSN' | 'START_DATE' | 'END_DATE'>,
    orderByDirection?: Array<'ASC' | 'DESC'>,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<SearchResultMember>>;
  public getMembers1(
    firstResult?: number,
    maxResults?: number,
    policyFrameIds?: Array<string>,
    activeOnly?: boolean,
    orderBy?: Array<'PERSON_NAME' | 'PERSON_SSN' | 'START_DATE' | 'END_DATE'>,
    orderByDirection?: Array<'ASC' | 'DESC'>,
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
    if (policyFrameIds) {
      policyFrameIds.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(
          localVarQueryParameters,
          <any>element,
          'policyFrameIds'
        );
      });
    }
    if (activeOnly !== undefined && activeOnly !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>activeOnly,
        'activeOnly'
      );
    }
    if (orderBy) {
      orderBy.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(
          localVarQueryParameters,
          <any>element,
          'orderBy'
        );
      });
    }
    if (orderByDirection) {
      orderByDirection.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(
          localVarQueryParameters,
          <any>element,
          'orderByDirection'
        );
      });
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

    return this.httpClient.get<SearchResultMember>(
      `${this.configuration.basePath}/policies/frames/members`,
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
