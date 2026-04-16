
# SignerStatus

Per-signer status. - `pending` — signing link sent, awaiting signer - `signed` — signer completed - `expired` — signer did not sign before `expires_at` - `error` — terminal failure for this signer - `cancelled` — parent request was cancelled 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { SignerStatus } from 'paraph'

// TODO: Update the object below with actual values
const example = {
} satisfies SignerStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignerStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


