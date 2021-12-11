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
import { FieldOption } from './fieldOption';

export interface Field {
  name?: string;
  label?: string;
  type: Field.TypeEnum;
  required?: boolean;
  defaultValue?: string;
  securityLevel?: number;
  archiveCategory?: string;
  options?: Array<FieldOption>;
}
export namespace Field {
  export type TypeEnum =
    | 'BOOLEAN_BO'
    | 'DATE_DA'
    | 'DECIMAL_DE'
    | 'FILE_FI'
    | 'INTEGER_IN'
    | 'OPTION_OP'
    | 'TEXT_TE';
  export const TypeEnum = {
    BooleanBo: 'BOOLEAN_BO' as TypeEnum,
    DateDa: 'DATE_DA' as TypeEnum,
    DecimalDe: 'DECIMAL_DE' as TypeEnum,
    FileFi: 'FILE_FI' as TypeEnum,
    IntegerIn: 'INTEGER_IN' as TypeEnum,
    OptionOp: 'OPTION_OP' as TypeEnum,
    TextTe: 'TEXT_TE' as TypeEnum,
  };
}
