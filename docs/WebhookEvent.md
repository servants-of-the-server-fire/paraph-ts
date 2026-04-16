
# WebhookEvent

Event types. `request.created`, `request.success`, `request.cancelled`, and `request.error` are dispatched for request lifecycle transitions. `signer.viewed` fires each time a signer loads their signing link, `signer.signed` fires when a signer completes signing, and `signer.declined` fires when a signer explicitly declines to sign. `webhook.test` is sent when you use the test endpoint to verify your webhook URL. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { WebhookEvent } from 'paraph'

// TODO: Update the object below with actual values
const example = {
} satisfies WebhookEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


