
# WebhookListResponse


## Properties

Name | Type
------------ | -------------
`webhooks` | [Array&lt;Webhook&gt;](Webhook.md)
`list_info` | [ListInfo](ListInfo.md)

## Example

```typescript
import type { WebhookListResponse } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "webhooks": null,
  "list_info": null,
} satisfies WebhookListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


