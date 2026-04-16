
# CreateRequestRequest


## Properties

Name | Type
------------ | -------------
`template_id` | string
`fields` | { [key: string]: string; }
`signers` | [{ [key: string]: SignerInput; }](SignerInput.md)
`title` | string
`message` | string
`metadata` | { [key: string]: string; }
`allow_typed_signature` | boolean

## Example

```typescript
import type { CreateRequestRequest } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "template_id": null,
  "fields": null,
  "signers": null,
  "title": null,
  "message": null,
  "metadata": null,
  "allow_typed_signature": null,
} satisfies CreateRequestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateRequestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


