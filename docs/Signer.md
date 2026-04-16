
# Signer


## Properties

Name | Type
------------ | -------------
`id` | string
`signer_label` | string
`recipient_email` | string
`status` | [SignerStatus](SignerStatus.md)
`expires_at` | Date
`signed_at` | Date

## Example

```typescript
import type { Signer } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "signer_label": null,
  "recipient_email": null,
  "status": null,
  "expires_at": null,
  "signed_at": null,
} satisfies Signer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Signer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


