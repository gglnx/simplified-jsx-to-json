import { expectType } from 'tsd';
import jsxToJson, { JsxCreateElementNode } from '.';

expectType<JsxCreateElementNode[]>(jsxToJson('foo bar'));
