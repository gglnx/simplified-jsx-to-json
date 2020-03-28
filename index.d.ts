export type JsxCreateElementNode =
  | [string, { [key: string]: any }, ...JsxCreateElementNode[]]
  | string;

declare function jsxToJson(input: string): JsxCreateElementNode[];

export default jsxToJson;
