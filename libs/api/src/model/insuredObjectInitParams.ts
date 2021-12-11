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

export interface InsuredObjectInitParams {
  type: InsuredObjectInitParams.TypeEnum;
}
export namespace InsuredObjectInitParams {
  export type TypeEnum =
    | 'VESSEL_1'
    | 'RIG_OBJECT_10'
    | 'FLOATING_INSTAL_12'
    | 'LIABILITY_13'
    | 'AQUAOBJECT_14'
    | 'FISH_15'
    | 'AQUA_CARGO_16'
    | 'COASTAL_2'
    | 'CARGO_OBJECT_3'
    | 'ENERGY_PHYSOBJ_4'
    | 'ENERGY_PACKOBJ_5'
    | 'PROPERTY_6'
    | 'VEHICLE_FLEET_60'
    | 'VEHICLE_61'
    | 'MOTORCYKLE_62'
    | 'MACHINE_63'
    | 'TRAILER_64'
    | 'PERSON_GROUP_65'
    | 'PERSON_66'
    | 'AVIATION_OBJECT_7'
    | 'BUILDING_70'
    | 'CABIN_71'
    | 'ARBEIDSMASKIN_73'
    | 'INVENTORY_74'
    | 'LEISURE_BOAT_75'
    | 'VALUABLES_76'
    | 'ANIMAL_77'
    | 'PLACE_FLEET_78'
    | 'PLACE_8'
    | 'CUMULE_9';
  export const TypeEnum = {
    Vessel1: 'VESSEL_1' as TypeEnum,
    RigObject10: 'RIG_OBJECT_10' as TypeEnum,
    FloatingInstal12: 'FLOATING_INSTAL_12' as TypeEnum,
    Liability13: 'LIABILITY_13' as TypeEnum,
    Aquaobject14: 'AQUAOBJECT_14' as TypeEnum,
    Fish15: 'FISH_15' as TypeEnum,
    AquaCargo16: 'AQUA_CARGO_16' as TypeEnum,
    Coastal2: 'COASTAL_2' as TypeEnum,
    CargoObject3: 'CARGO_OBJECT_3' as TypeEnum,
    EnergyPhysobj4: 'ENERGY_PHYSOBJ_4' as TypeEnum,
    EnergyPackobj5: 'ENERGY_PACKOBJ_5' as TypeEnum,
    Property6: 'PROPERTY_6' as TypeEnum,
    VehicleFleet60: 'VEHICLE_FLEET_60' as TypeEnum,
    Vehicle61: 'VEHICLE_61' as TypeEnum,
    Motorcykle62: 'MOTORCYKLE_62' as TypeEnum,
    Machine63: 'MACHINE_63' as TypeEnum,
    Trailer64: 'TRAILER_64' as TypeEnum,
    PersonGroup65: 'PERSON_GROUP_65' as TypeEnum,
    Person66: 'PERSON_66' as TypeEnum,
    AviationObject7: 'AVIATION_OBJECT_7' as TypeEnum,
    Building70: 'BUILDING_70' as TypeEnum,
    Cabin71: 'CABIN_71' as TypeEnum,
    Arbeidsmaskin73: 'ARBEIDSMASKIN_73' as TypeEnum,
    Inventory74: 'INVENTORY_74' as TypeEnum,
    LeisureBoat75: 'LEISURE_BOAT_75' as TypeEnum,
    Valuables76: 'VALUABLES_76' as TypeEnum,
    Animal77: 'ANIMAL_77' as TypeEnum,
    PlaceFleet78: 'PLACE_FLEET_78' as TypeEnum,
    Place8: 'PLACE_8' as TypeEnum,
    Cumule9: 'CUMULE_9' as TypeEnum,
  };
}
