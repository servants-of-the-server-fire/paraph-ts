
# Template


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`metadata` | { [key: string]: string; }
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { Template } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "metadata": null,
  "created_at": null,
  "updated_at": null,
} satisfies Template

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Template
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


