
# SignerInput


## Properties

Name | Type
------------ | -------------
`email` | string
`override_signature_url` | string

## Example

```typescript
import type { SignerInput } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "override_signature_url": null,
} satisfies SignerInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignerInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


