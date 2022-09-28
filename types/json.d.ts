// @ts-ignore
type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray
    | JSONValue;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }
