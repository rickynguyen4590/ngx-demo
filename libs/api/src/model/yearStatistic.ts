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

export interface YearStatistic {
  year?: number;
  ourShareCalculatedGrossPremium?: number;
  ourShareCalculatedLowGrossPremium?: number;
  ourShareCalculatedNetPremium?: number;
  ourShareClosedGrossPremium?: number;
  ourShareClosedLowGrossPremium?: number;
  ourShareClosedNetPremium?: number;
  retainedCalculatedGrossPremium?: number;
  retainedCalculatedLowGrossPremium?: number;
  retainedCalculatedNetPremium?: number;
  retainedClosedGrossPremium?: number;
  retainedClosedLowGrossPremium?: number;
  retainedClosedNetPremium?: number;
  premiumClosedNetReceivedShare?: number;
  ourShareClaimReserve?: number;
  ourShareClaimSettled?: number;
  retainedClaimReserve?: number;
  retainedClaimSettled?: number;
}