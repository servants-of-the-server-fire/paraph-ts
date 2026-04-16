
# SignaturePlacementInput


## Properties

Name | Type
------------ | -------------
`signer_label` | string
`page_number` | number
`x` | number
`y` | number
`width` | number
`height` | number

## Example

```typescript
import type { SignaturePlacementInput } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "signer_label": null,
  "page_number": null,
  "x": null,
  "y": null,
  "width": null,
  "height": null,
} satisfies SignaturePlacementInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignaturePlacementInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


