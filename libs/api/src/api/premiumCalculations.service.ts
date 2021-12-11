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

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class PremiumCalculationsService {
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
   * @param startDate
   * @param endDate
   * @param startHour
   * @param endHour
   * @param calculationType
   * @param use366Days
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public calculatePremiumDays1(
    startDate: string,
    endDate: string,
    startHour: number,
    endHour: number,
    calculationType: 'NORMAL_0' | '_9125D_1' | 'EXACT_DAYS_2',
    use366Days?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<number>;
  public calculatePremiumDays1(
    startDate: string,
    endDate: string,
    startHour: number,
    endHour: number,
    calculationType: 'NORMAL_0' | '_9125D_1' | 'EXACT_DAYS_2',
    use366Days?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<number>>;
  public calculatePremiumDays1(
    startDate: string,
    endDate: string,
    startHour: number,
    endHour: number,
    calculationType: 'NORMAL_0' | '_9125D_1' | 'EXACT_DAYS_2',
    use366Days?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<number>>;
  public calculatePremiumDays1(
    startDate: string,
    endDate: string,
    startHour: number,
    endHour: number,
    calculationType: 'NORMAL_0' | '_9125D_1' | 'EXACT_DAYS_2',
    use366Days?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (startDate === null || startDate === undefined) {
      throw new Error(
        'Required parameter startDate was null or undefined when calling calculatePremiumDays1.'
      );
    }
    if (endDate === null || endDate === undefined) {
      throw new Error(
        'Required parameter endDate was null or undefined when calling calculatePremiumDays1.'
      );
    }
    if (startHour === null || startHour === undefined) {
      throw new Error(
        'Required parameter startHour was null or undefined when calling calculatePremiumDays1.'
      );
    }
    if (endHour === null || endHour === undefined) {
      throw new Error(
        'Required parameter endHour was null or undefined when calling calculatePremiumDays1.'
      );
    }
    if (calculationType === null || calculationType === undefined) {
      throw new Error(
        'Required parameter calculationType was null or undefined when calling calculatePremiumDays1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (startDate !== undefined && startDate !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>startDate,
        'startDate'
      );
    }
    if (endDate !== undefined && endDate !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>endDate,
        'endDate'
      );
    }
    if (startHour !== undefined && startHour !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>startHour,
        'startHour'
      );
    }
    if (endHour !== undefined && endHour !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>endHour,
        'endHour'
      );
    }
    if (calculationType !== undefined && calculationType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>calculationType,
        'calculationType'
      );
    }
    if (use366Days !== undefined && use366Days !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>use366Days,
        'use366Days'
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
      `${this.configuration.basePath}/premiumcalculations/premiumdays`,
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
