/* Typescript file generated by genType. */

// tslint:disable-next-line:no-var-requires
const RecordsBS = require('./Records.bs');

import {list} from '../../src/shims/ReasonPervasives.shim';

// tslint:disable-next-line:interface-over-type-literal
export type coord = {
  readonly x: number, 
  readonly y: number, 
  readonly z?: number
};

// tslint:disable-next-line:interface-over-type-literal
export type person = {
  readonly name: string, 
  readonly age: number, 
  readonly address?: string
};

// tslint:disable-next-line:interface-over-type-literal
export type business = {
  readonly name: string, 
  readonly owner?: person, 
  readonly address?: string
};

// tslint:disable-next-line:interface-over-type-literal
export type payload<a> = {readonly num: number, readonly payload: a};

// tslint:disable-next-line:interface-over-type-literal
export type record = {readonly v: number, readonly w: number};

// tslint:disable-next-line:interface-over-type-literal
export type business2 = {
  readonly name: string, 
  readonly owner: (null | undefined | person), 
  readonly address2: (null | undefined | string)
};

// tslint:disable-next-line:interface-over-type-literal
export type mix = {
  readonly a: number, 
  readonly b: number, 
  readonly c?: {
    readonly name: string, 
    readonly surname: string
  }
};

export const origin: coord = {x:RecordsBS.origin[0], y:RecordsBS.origin[1], z:RecordsBS.origin[2]};

export const computeArea: (_1:coord) => number = function _(Arg1) { const result = RecordsBS.computeArea([Arg1.x, Arg1.y, Arg1.z]); return result };

export const coord2d: (_1:number, _2:number) => coord = function _(Arg1, Arg2) { const result = RecordsBS.coord2d(Arg1, Arg2); return {x:result[0], y:result[1], z:result[2]} };

export const findAddress: (_1:business) => list<string> = function _(Arg1) { const result = RecordsBS.findAddress([Arg1.name, (Arg1.owner == null ? undefined : [Arg1.owner.name, Arg1.owner.age, Arg1.owner.address]), Arg1.address]); return result };

export const someBusiness: business = {name:RecordsBS.someBusiness[0], owner:(RecordsBS.someBusiness[1] == null ? RecordsBS.someBusiness[1] : {name:RecordsBS.someBusiness[1][0], age:RecordsBS.someBusiness[1][1], address:RecordsBS.someBusiness[1][2]}), address:RecordsBS.someBusiness[2]};

export const findAllAddresses: (_1:business[]) => string[] = function _(Arg1) { const result = RecordsBS.findAllAddresses(Arg1.map(function _element(x) { return [x.name, (x.owner == null ? undefined : [x.owner.name, x.owner.age, x.owner.address]), x.address]})); return result };

export const getPayload: <T1>(_1:payload<T1>) => T1 = function _(Arg1) { const result = RecordsBS.getPayload([Arg1.num, Arg1.payload]); return result };

export const getPayloadRecord: (_1:payload<record>) => record = function _(Arg1) { const result = RecordsBS.getPayloadRecord([Arg1.num, [Arg1.payload.v, Arg1.payload.w]]); return {v:result[0], w:result[1]} };

export const recordValue: record = {v:RecordsBS.recordValue[0], w:RecordsBS.recordValue[1]};

export const payloadValue: payload<record> = {num:RecordsBS.payloadValue[0], payload:{v:RecordsBS.payloadValue[1][0], w:RecordsBS.payloadValue[1][1]}};

export const getPayloadRecordPlusOne: (_1:payload<record>) => record = function _(Arg1) { const result = RecordsBS.getPayloadRecordPlusOne([Arg1.num, [Arg1.payload.v, Arg1.payload.w]]); return {v:result[0], w:result[1]} };

export const findAddress2: (_1:business2) => list<string> = function _(Arg1) { const result = RecordsBS.findAddress2([Arg1.name, (Arg1.owner == null ? Arg1.owner : [Arg1.owner.name, Arg1.owner.age, Arg1.owner.address]), Arg1.address2]); return result };

export const someBusiness2: business2 = {name:RecordsBS.someBusiness2[0], owner:(RecordsBS.someBusiness2[1] == null ? RecordsBS.someBusiness2[1] : {name:RecordsBS.someBusiness2[1][0], age:RecordsBS.someBusiness2[1][1], address:RecordsBS.someBusiness2[1][2]}), address2:RecordsBS.someBusiness2[2]};

export const computeArea3: (_1:{
  readonly x: number, 
  readonly y: number, 
  readonly z: (null | undefined | number)
}) => number = RecordsBS.computeArea3;

export const computeArea4: (_1:{
  readonly x: number, 
  readonly y: number, 
  readonly z?: number
}) => number = RecordsBS.computeArea4;
