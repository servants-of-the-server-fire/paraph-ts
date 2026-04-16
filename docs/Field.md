
# Field


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`type` | string
`options` | Array&lt;string&gt;

## Example

```typescript
import type { Field } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "options": null,
} satisfies Field

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Field
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


