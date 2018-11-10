/* TypeScript file generated by genType. */

// tslint:disable-next-line:no-var-requires
const TuplesBS = require('./Tuples.bs');

// tslint:disable-next-line:interface-over-type-literal
export type coord = [number, number, (null | undefined | number)];

// tslint:disable-next-line:interface-over-type-literal
export type coord2 = [number, number, (null | undefined | number)];

// tslint:disable-next-line:interface-over-type-literal
export type person = {readonly name: string, readonly age: number};

// tslint:disable-next-line:interface-over-type-literal
export type couple = [person, person];

export const testTuple: (_1:[number, number]) => number = TuplesBS.testTuple;

export const origin: [number, number, (null | undefined | number)] = TuplesBS.origin;

export const computeArea: (_1:[number, number, (null | undefined | number)]) => number = function _(Arg1) { const result = TuplesBS.computeArea([Arg1[0], Arg1[1], (Arg1[2] == null ? undefined : Arg1[2])]); return result };

export const computeAreaWithIdent: (_1:coord) => number = function _(Arg1) { const result = TuplesBS.computeAreaWithIdent([Arg1[0], Arg1[1], (Arg1[2] == null ? undefined : Arg1[2])]); return result };

export const computeAreaNoConverters: (_1:[number, number]) => number = TuplesBS.computeAreaNoConverters;

export const coord2d: <T1,T2,T3>(_1:T1, _2:T2) => [T1, T2, (null | undefined | T3)] = TuplesBS.coord2d;

export const getFirstName: (_1:couple) => string = function _(Arg1) { const result = TuplesBS.getFirstName([[Arg1[0].name, Arg1[0].age], [Arg1[1].name, Arg1[1].age]]); return result };

export const marry: (_1:person, _2:person) => couple = function _(Arg1, Arg2) { const result = TuplesBS.marry([Arg1.name, Arg1.age], [Arg2.name, Arg2.age]); return [{name:result[0][0], age:result[0][1]}, {name:result[1][0], age:result[1][1]}] };

export const changeSecondAge: (_1:couple) => couple = function _(Arg1) { const result = TuplesBS.changeSecondAge([[Arg1[0].name, Arg1[0].age], [Arg1[1].name, Arg1[1].age]]); return [{name:result[0][0], age:result[0][1]}, {name:result[1][0], age:result[1][1]}] };