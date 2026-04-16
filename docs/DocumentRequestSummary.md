
# DocumentRequestSummary

Compact request representation returned in list endpoints. Use GET /requests/{id} for full details including inputs, metadata, and signers.

## Properties

Name | Type
------------ | -------------
`id` | string
`template_id` | string
`title` | string
`status` | [RequestStatus](RequestStatus.md)
`has_signing` | boolean
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { DocumentRequestSummary } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "template_id": null,
  "title": null,
  "status": null,
  "has_signing": null,
  "created_at": null,
  "updated_at": null,
} satisfies DocumentRequestSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentRequestSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


