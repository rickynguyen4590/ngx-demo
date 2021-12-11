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

import { CarInsurancePrice } from '../model/models';
import { InsurancePrice } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class PremiumCalculationsPrivateService {
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
   * @param ssn
   * @param postalCode
   * @param totalAmount
   * @param deductible
   * @param securityAlarm
   * @param fireAlarm
   * @param waterAlarm
   * @param residenceType
   * @param buildingMaterial
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPrice(
    ssn: string,
    postalCode: string,
    totalAmount: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    residenceType:
      | 'DETACHED'
      | 'DUPLEX_HORIZONTAL'
      | 'DUPLEX_VERTICAL'
      | 'TRIPLEX'
      | 'QUADRUPLEX'
      | 'TERRACED'
      | 'DORM'
      | 'APARTMENT'
      | 'APARTMENT_BUILDING',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<InsurancePrice>;
  public getPrice(
    ssn: string,
    postalCode: string,
    totalAmount: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    residenceType:
      | 'DETACHED'
      | 'DUPLEX_HORIZONTAL'
      | 'DUPLEX_VERTICAL'
      | 'TRIPLEX'
      | 'QUADRUPLEX'
      | 'TERRACED'
      | 'DORM'
      | 'APARTMENT'
      | 'APARTMENT_BUILDING',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<InsurancePrice>>;
  public getPrice(
    ssn: string,
    postalCode: string,
    totalAmount: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    residenceType:
      | 'DETACHED'
      | 'DUPLEX_HORIZONTAL'
      | 'DUPLEX_VERTICAL'
      | 'TRIPLEX'
      | 'QUADRUPLEX'
      | 'TERRACED'
      | 'DORM'
      | 'APARTMENT'
      | 'APARTMENT_BUILDING',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<InsurancePrice>>;
  public getPrice(
    ssn: string,
    postalCode: string,
    totalAmount: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    residenceType:
      | 'DETACHED'
      | 'DUPLEX_HORIZONTAL'
      | 'DUPLEX_VERTICAL'
      | 'TRIPLEX'
      | 'QUADRUPLEX'
      | 'TERRACED'
      | 'DORM'
      | 'APARTMENT'
      | 'APARTMENT_BUILDING',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (ssn === null || ssn === undefined) {
      throw new Error(
        'Required parameter ssn was null or undefined when calling getPrice.'
      );
    }
    if (postalCode === null || postalCode === undefined) {
      throw new Error(
        'Required parameter postalCode was null or undefined when calling getPrice.'
      );
    }
    if (totalAmount === null || totalAmount === undefined) {
      throw new Error(
        'Required parameter totalAmount was null or undefined when calling getPrice.'
      );
    }
    if (deductible === null || deductible === undefined) {
      throw new Error(
        'Required parameter deductible was null or undefined when calling getPrice.'
      );
    }
    if (securityAlarm === null || securityAlarm === undefined) {
      throw new Error(
        'Required parameter securityAlarm was null or undefined when calling getPrice.'
      );
    }
    if (fireAlarm === null || fireAlarm === undefined) {
      throw new Error(
        'Required parameter fireAlarm was null or undefined when calling getPrice.'
      );
    }
    if (waterAlarm === null || waterAlarm === undefined) {
      throw new Error(
        'Required parameter waterAlarm was null or undefined when calling getPrice.'
      );
    }
    if (residenceType === null || residenceType === undefined) {
      throw new Error(
        'Required parameter residenceType was null or undefined when calling getPrice.'
      );
    }
    if (buildingMaterial === null || buildingMaterial === undefined) {
      throw new Error(
        'Required parameter buildingMaterial was null or undefined when calling getPrice.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (ssn !== undefined && ssn !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>ssn,
        'ssn'
      );
    }
    if (postalCode !== undefined && postalCode !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>postalCode,
        'postalCode'
      );
    }
    if (totalAmount !== undefined && totalAmount !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>totalAmount,
        'totalAmount'
      );
    }
    if (deductible !== undefined && deductible !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>deductible,
        'deductible'
      );
    }
    if (securityAlarm !== undefined && securityAlarm !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>securityAlarm,
        'securityAlarm'
      );
    }
    if (fireAlarm !== undefined && fireAlarm !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>fireAlarm,
        'fireAlarm'
      );
    }
    if (waterAlarm !== undefined && waterAlarm !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>waterAlarm,
        'waterAlarm'
      );
    }
    if (residenceType !== undefined && residenceType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>residenceType,
        'residenceType'
      );
    }
    if (buildingMaterial !== undefined && buildingMaterial !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>buildingMaterial,
        'buildingMaterial'
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

    return this.httpClient.get<InsurancePrice>(
      `${this.configuration.basePath}/premiumcalculations/private/contents`,
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
   * @param ssn
   * @param postalCode
   * @param nonmarineSubModel
   * @param deductible
   * @param kmPerYear
   * @param bonusPercent
   * @param bonusDuration
   * @param coverage
   * @param ageYoungestDriver
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPrice1(
    ssn: string,
    postalCode: string,
    nonmarineSubModel: number,
    deductible: number,
    kmPerYear: number,
    bonusPercent: number,
    bonusDuration:
      | 'ONE_YEAR'
      | 'TWO_YEARS'
      | 'THREE_YEARS'
      | 'FOUR_YEARS'
      | 'FIVE_YEARS'
      | 'MORE_THAN_FIVE_YEARS'
      | 'ONE_TO_FIVE_YEARS',
    coverage: 'LIABILITY' | 'PARTIAL_HULL' | 'HULL',
    ageYoungestDriver?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<CarInsurancePrice>;
  public getPrice1(
    ssn: string,
    postalCode: string,
    nonmarineSubModel: number,
    deductible: number,
    kmPerYear: number,
    bonusPercent: number,
    bonusDuration:
      | 'ONE_YEAR'
      | 'TWO_YEARS'
      | 'THREE_YEARS'
      | 'FOUR_YEARS'
      | 'FIVE_YEARS'
      | 'MORE_THAN_FIVE_YEARS'
      | 'ONE_TO_FIVE_YEARS',
    coverage: 'LIABILITY' | 'PARTIAL_HULL' | 'HULL',
    ageYoungestDriver?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<CarInsurancePrice>>;
  public getPrice1(
    ssn: string,
    postalCode: string,
    nonmarineSubModel: number,
    deductible: number,
    kmPerYear: number,
    bonusPercent: number,
    bonusDuration:
      | 'ONE_YEAR'
      | 'TWO_YEARS'
      | 'THREE_YEARS'
      | 'FOUR_YEARS'
      | 'FIVE_YEARS'
      | 'MORE_THAN_FIVE_YEARS'
      | 'ONE_TO_FIVE_YEARS',
    coverage: 'LIABILITY' | 'PARTIAL_HULL' | 'HULL',
    ageYoungestDriver?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<CarInsurancePrice>>;
  public getPrice1(
    ssn: string,
    postalCode: string,
    nonmarineSubModel: number,
    deductible: number,
    kmPerYear: number,
    bonusPercent: number,
    bonusDuration:
      | 'ONE_YEAR'
      | 'TWO_YEARS'
      | 'THREE_YEARS'
      | 'FOUR_YEARS'
      | 'FIVE_YEARS'
      | 'MORE_THAN_FIVE_YEARS'
      | 'ONE_TO_FIVE_YEARS',
    coverage: 'LIABILITY' | 'PARTIAL_HULL' | 'HULL',
    ageYoungestDriver?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (ssn === null || ssn === undefined) {
      throw new Error(
        'Required parameter ssn was null or undefined when calling getPrice1.'
      );
    }
    if (postalCode === null || postalCode === undefined) {
      throw new Error(
        'Required parameter postalCode was null or undefined when calling getPrice1.'
      );
    }
    if (nonmarineSubModel === null || nonmarineSubModel === undefined) {
      throw new Error(
        'Required parameter nonmarineSubModel was null or undefined when calling getPrice1.'
      );
    }
    if (deductible === null || deductible === undefined) {
      throw new Error(
        'Required parameter deductible was null or undefined when calling getPrice1.'
      );
    }
    if (kmPerYear === null || kmPerYear === undefined) {
      throw new Error(
        'Required parameter kmPerYear was null or undefined when calling getPrice1.'
      );
    }
    if (bonusPercent === null || bonusPercent === undefined) {
      throw new Error(
        'Required parameter bonusPercent was null or undefined when calling getPrice1.'
      );
    }
    if (bonusDuration === null || bonusDuration === undefined) {
      throw new Error(
        'Required parameter bonusDuration was null or undefined when calling getPrice1.'
      );
    }
    if (coverage === null || coverage === undefined) {
      throw new Error(
        'Required parameter coverage was null or undefined when calling getPrice1.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (ssn !== undefined && ssn !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>ssn,
        'ssn'
      );
    }
    if (postalCode !== undefined && postalCode !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>postalCode,
        'postalCode'
      );
    }
    if (nonmarineSubModel !== undefined && nonmarineSubModel !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>nonmarineSubModel,
        'nonmarineSubModel'
      );
    }
    if (deductible !== undefined && deductible !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>deductible,
        'deductible'
      );
    }
    if (ageYoungestDriver !== undefined && ageYoungestDriver !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>ageYoungestDriver,
        'ageYoungestDriver'
      );
    }
    if (kmPerYear !== undefined && kmPerYear !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>kmPerYear,
        'kmPerYear'
      );
    }
    if (bonusPercent !== undefined && bonusPercent !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>bonusPercent,
        'bonusPercent'
      );
    }
    if (bonusDuration !== undefined && bonusDuration !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>bonusDuration,
        'bonusDuration'
      );
    }
    if (coverage !== undefined && coverage !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>coverage,
        'coverage'
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

    return this.httpClient.get<CarInsurancePrice>(
      `${this.configuration.basePath}/premiumcalculations/private/car`,
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
   * @param ssn
   * @param postalCode
   * @param grossArea
   * @param deductible
   * @param securityAlarm
   * @param fireAlarm
   * @param waterAlarm
   * @param pipeInPipe
   * @param livesThere
   * @param residenceType
   * @param buildingMaterial
   * @param buildingInsuranceStandard
   * @param residenceUnits
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPrice2(
    ssn: string,
    postalCode: string,
    grossArea: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    pipeInPipe: boolean,
    livesThere: boolean,
    residenceType: 'DETACHED' | 'DUPLEX' | 'TERRACED' | 'COTTAGE',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    buildingInsuranceStandard: 'POOR' | 'NORMAL' | 'BETTER' | 'HIGH',
    residenceUnits: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<InsurancePrice>;
  public getPrice2(
    ssn: string,
    postalCode: string,
    grossArea: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    pipeInPipe: boolean,
    livesThere: boolean,
    residenceType: 'DETACHED' | 'DUPLEX' | 'TERRACED' | 'COTTAGE',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    buildingInsuranceStandard: 'POOR' | 'NORMAL' | 'BETTER' | 'HIGH',
    residenceUnits: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<InsurancePrice>>;
  public getPrice2(
    ssn: string,
    postalCode: string,
    grossArea: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    pipeInPipe: boolean,
    livesThere: boolean,
    residenceType: 'DETACHED' | 'DUPLEX' | 'TERRACED' | 'COTTAGE',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    buildingInsuranceStandard: 'POOR' | 'NORMAL' | 'BETTER' | 'HIGH',
    residenceUnits: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<InsurancePrice>>;
  public getPrice2(
    ssn: string,
    postalCode: string,
    grossArea: number,
    deductible: number,
    securityAlarm: boolean,
    fireAlarm: boolean,
    waterAlarm: boolean,
    pipeInPipe: boolean,
    livesThere: boolean,
    residenceType: 'DETACHED' | 'DUPLEX' | 'TERRACED' | 'COTTAGE',
    buildingMaterial: 'WOOD' | 'FIRE_SAFE' | 'BRICK',
    buildingInsuranceStandard: 'POOR' | 'NORMAL' | 'BETTER' | 'HIGH',
    residenceUnits: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (ssn === null || ssn === undefined) {
      throw new Error(
        'Required parameter ssn was null or undefined when calling getPrice2.'
      );
    }
    if (postalCode === null || postalCode === undefined) {
      throw new Error(
        'Required parameter postalCode was null or undefined when calling getPrice2.'
      );
    }
    if (grossArea === null || grossArea === undefined) {
      throw new Error(
        'Required parameter grossArea was null or undefined when calling getPrice2.'
      );
    }
    if (deductible === null || deductible === undefined) {
      throw new Error(
        'Required parameter deductible was null or undefined when calling getPrice2.'
      );
    }
    if (securityAlarm === null || securityAlarm === undefined) {
      throw new Error(
        'Required parameter securityAlarm was null or undefined when calling getPrice2.'
      );
    }
    if (fireAlarm === null || fireAlarm === undefined) {
      throw new Error(
        'Required parameter fireAlarm was null or undefined when calling getPrice2.'
      );
    }
    if (waterAlarm === null || waterAlarm === undefined) {
      throw new Error(
        'Required parameter waterAlarm was null or undefined when calling getPrice2.'
      );
    }
    if (pipeInPipe === null || pipeInPipe === undefined) {
      throw new Error(
        'Required parameter pipeInPipe was null or undefined when calling getPrice2.'
      );
    }
    if (livesThere === null || livesThere === undefined) {
      throw new Error(
        'Required parameter livesThere was null or undefined when calling getPrice2.'
      );
    }
    if (residenceType === null || residenceType === undefined) {
      throw new Error(
        'Required parameter residenceType was null or undefined when calling getPrice2.'
      );
    }
    if (buildingMaterial === null || buildingMaterial === undefined) {
      throw new Error(
        'Required parameter buildingMaterial was null or undefined when calling getPrice2.'
      );
    }
    if (
      buildingInsuranceStandard === null ||
      buildingInsuranceStandard === undefined
    ) {
      throw new Error(
        'Required parameter buildingInsuranceStandard was null or undefined when calling getPrice2.'
      );
    }
    if (residenceUnits === null || residenceUnits === undefined) {
      throw new Error(
        'Required parameter residenceUnits was null or undefined when calling getPrice2.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (ssn !== undefined && ssn !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>ssn,
        'ssn'
      );
    }
    if (postalCode !== undefined && postalCode !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>postalCode,
        'postalCode'
      );
    }
    if (grossArea !== undefined && grossArea !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>grossArea,
        'grossArea'
      );
    }
    if (deductible !== undefined && deductible !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>deductible,
        'deductible'
      );
    }
    if (securityAlarm !== undefined && securityAlarm !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>securityAlarm,
        'securityAlarm'
      );
    }
    if (fireAlarm !== undefined && fireAlarm !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>fireAlarm,
        'fireAlarm'
      );
    }
    if (waterAlarm !== undefined && waterAlarm !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>waterAlarm,
        'waterAlarm'
      );
    }
    if (pipeInPipe !== undefined && pipeInPipe !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>pipeInPipe,
        'pipeInPipe'
      );
    }
    if (livesThere !== undefined && livesThere !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>livesThere,
        'livesThere'
      );
    }
    if (residenceType !== undefined && residenceType !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>residenceType,
        'residenceType'
      );
    }
    if (buildingMaterial !== undefined && buildingMaterial !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>buildingMaterial,
        'buildingMaterial'
      );
    }
    if (
      buildingInsuranceStandard !== undefined &&
      buildingInsuranceStandard !== null
    ) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>buildingInsuranceStandard,
        'buildingInsuranceStandard'
      );
    }
    if (residenceUnits !== undefined && residenceUnits !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>residenceUnits,
        'residenceUnits'
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

    return this.httpClient.get<InsurancePrice>(
      `${this.configuration.basePath}/premiumcalculations/private/building`,
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
   * @param ssn
   * @param postalCode
   * @param coverage
   * @param oldestInsured
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPrice4(
    ssn: string,
    postalCode: string,
    coverage: 'SINGLE_PERSON' | 'FAMILY',
    oldestInsured?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<InsurancePrice>;
  public getPrice4(
    ssn: string,
    postalCode: string,
    coverage: 'SINGLE_PERSON' | 'FAMILY',
    oldestInsured?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpResponse<InsurancePrice>>;
  public getPrice4(
    ssn: string,
    postalCode: string,
    coverage: 'SINGLE_PERSON' | 'FAMILY',
    oldestInsured?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<HttpEvent<InsurancePrice>>;
  public getPrice4(
    ssn: string,
    postalCode: string,
    coverage: 'SINGLE_PERSON' | 'FAMILY',
    oldestInsured?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*'; context?: HttpContext }
  ): Observable<any> {
    if (ssn === null || ssn === undefined) {
      throw new Error(
        'Required parameter ssn was null or undefined when calling getPrice4.'
      );
    }
    if (postalCode === null || postalCode === undefined) {
      throw new Error(
        'Required parameter postalCode was null or undefined when calling getPrice4.'
      );
    }
    if (coverage === null || coverage === undefined) {
      throw new Error(
        'Required parameter coverage was null or undefined when calling getPrice4.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (ssn !== undefined && ssn !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>ssn,
        'ssn'
      );
    }
    if (postalCode !== undefined && postalCode !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>postalCode,
        'postalCode'
      );
    }
    if (coverage !== undefined && coverage !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>coverage,
        'coverage'
      );
    }
    if (oldestInsured !== undefined && oldestInsured !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>oldestInsured,
        'oldestInsured'
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

    return this.httpClient.get<InsurancePrice>(
      `${this.configuration.basePath}/premiumcalculations/private/travel`,
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
