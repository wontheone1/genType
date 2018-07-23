/**
 * This is file generated by genFlow. Do not modify.
 *
 * @flow strict
 * @nolint
 */

// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Component1 = require("../Component1.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

import type {ComponentSpec as ReasonReactComponentSpec} from '../shims/ReasonReactFlowShim'
;

import type {Stateless as ReasonReactStateless} from '../shims/ReasonReactFlowShim'
;

import type {NoRetainedProps as ReasonReactNoRetainedProps} from '../shims/ReasonReactFlowShim'
;

import type {Actionless as ReasonReactActionless} from '../shims/ReasonReactFlowShim'
;

import type {Component as ReactComponent} from 'React'
;

function concat(argA, argB) {
  var match = Component1.concat(argA, argB === (null) ? undefined : argB);
  if (match !== undefined) {
    return match;
  } else {
    return (null);
  }
}

export type Props = {|message?:string|}
;

var component = ReasonReact.wrapReasonForJs(Component1.component, (function (jsProps) {
        var argD = jsProps.children;
        return Component1.make(jsProps.message, argD);
      }));



var plus = Component1.plus;


exports.concat = (concat : (string, ?string) => ?string);
exports.plus = (plus : <T10970>(number, T10970) => number);
exports.component = (component : React$ComponentType<Props>);
/*  Not a pure module */
