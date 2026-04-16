
# DocumentRequest

Full request representation returned by detail and create endpoints. Includes inputs, metadata, and signers.

## Properties

Name | Type
------------ | -------------
`id` | string
`template_id` | string
`title` | string
`message` | string
`status` | [RequestStatus](RequestStatus.md)
`has_signing` | boolean
`created_at` | Date
`updated_at` | Date
`inputs` | { [key: string]: string; }
`metadata` | { [key: string]: string; }
`signers` | [Array&lt;Signer&gt;](Signer.md)

## Example

```typescript
import type { DocumentRequest } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "template_id": null,
  "title": null,
  "message": null,
  "status": null,
  "has_signing": null,
  "created_at": null,
  "updated_at": null,
  "inputs": null,
  "metadata": null,
  "signers": null,
} satisfies DocumentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


