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
import { SimpleUser } from './simpleUser';
import { AsyncTask } from './asyncTask';
import { SimplePerson } from './simplePerson';

export interface UserNotification {
  id?: number;
  status?: UserNotification.StatusEnum;
  data?: string;
  email?: string;
  phone?: string;
  userNotificationType?: UserNotification.UserNotificationTypeEnum;
  sendType?: UserNotification.SendTypeEnum;
  user?: SimpleUser;
  person?: SimplePerson;
  created?: string;
  createdBy?: string;
  lastUpdated?: string;
  lastUpdatedBy?: string;
  started?: string;
  completed?: string;
  message?: string;
  asyncTask?: AsyncTask;
}
export namespace UserNotification {
  export type StatusEnum =
    | 'COMPLETED_C'
    | 'ERROR_E'
    | 'ORDERED_O'
    | 'PROCESSING_P'
    | 'CANCELLED_X';
  export const StatusEnum = {
    CompletedC: 'COMPLETED_C' as StatusEnum,
    ErrorE: 'ERROR_E' as StatusEnum,
    OrderedO: 'ORDERED_O' as StatusEnum,
    ProcessingP: 'PROCESSING_P' as StatusEnum,
    CancelledX: 'CANCELLED_X' as StatusEnum,
  };
  export type UserNotificationTypeEnum =
    | 'MSGANSWER_1'
    | 'SCHEMATREATED_2'
    | 'DOCUMENT_APPROV_3';
  export const UserNotificationTypeEnum = {
    Msganswer1: 'MSGANSWER_1' as UserNotificationTypeEnum,
    Schematreated2: 'SCHEMATREATED_2' as UserNotificationTypeEnum,
    DocumentApprov3: 'DOCUMENT_APPROV_3' as UserNotificationTypeEnum,
  };
  export type SendTypeEnum = 'EMAIL_1' | 'SMS_2' | 'EMAIL_WITH_ATCH_3';
  export const SendTypeEnum = {
    Email1: 'EMAIL_1' as SendTypeEnum,
    Sms2: 'SMS_2' as SendTypeEnum,
    EmailWithAtch3: 'EMAIL_WITH_ATCH_3' as SendTypeEnum,
  };
}
