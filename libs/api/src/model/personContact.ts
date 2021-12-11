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

export interface PersonContact {
  contact?: SimplePerson;
  primary?: boolean;
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
  type4?: boolean;
  type5?: boolean;
  type6?: boolean;
  type7?: boolean;
  type8?: boolean;
  type9?: boolean;
  type10?: boolean;
  type11?: boolean;
  type12?: boolean;
  type13?: boolean;
  type14?: boolean;
  type15?: boolean;
}