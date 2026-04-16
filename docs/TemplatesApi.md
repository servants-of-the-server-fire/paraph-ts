# TemplatesApi

All URIs are relative to *https://paraph.dev/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTemplate**](TemplatesApi.md#createtemplate) | **POST** /templates | Create template |
| [**deleteTemplate**](TemplatesApi.md#deletetemplate) | **DELETE** /templates/{id} | Delete template |
| [**downloadTemplate**](TemplatesApi.md#downloadtemplate) | **GET** /templates/{id}/download | Download template PDF |
| [**getTemplate**](TemplatesApi.md#gettemplate) | **GET** /templates/{id} | Get template detail |
| [**listTemplates**](TemplatesApi.md#listtemplates) | **GET** /templates | List templates |
| [**updateTemplate**](TemplatesApi.md#updatetemplateoperation) | **PATCH** /templates/{id} | Update template |



## createTemplate

> TemplateResponse createTemplate(name, file, fileUrl)

Create template

Upload a PDF with named form fields. Paraph detects the fields automatically.  **Provide exactly one of &#x60;file&#x60; or &#x60;file_url&#x60;.** Requests with neither or both return &#x60;400 Bad Request&#x60;. This constraint is validated server-side — OpenAPI doesn\&#39;t support expressing &#x60;oneOf&#x60; inside a multipart request body, so it\&#39;s documented in prose. 

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from 'paraph';
import type { CreateTemplateRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Display name for the template
    name: name_example,
    // Blob | PDF file with AcroForm fields (mutually exclusive with `file_url`) (optional)
    file: BINARY_DATA_HERE,
    // string | URL to fetch the PDF from (mutually exclusive with `file`) (optional)
    fileUrl: fileUrl_example,
  } satisfies CreateTemplateRequest;

  try {
    const data = await api.createTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Display name for the template | [Defaults to `undefined`] |
| **file** | `Blob` | PDF file with AcroForm fields (mutually exclusive with &#x60;file_url&#x60;) | [Optional] [Defaults to `undefined`] |
| **fileUrl** | `string` | URL to fetch the PDF from (mutually exclusive with &#x60;file&#x60;) | [Optional] [Defaults to `undefined`] |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Template created |  -  |
| **400** | Validation error or PDF could not be parsed |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTemplate

> deleteTemplate(id)

Delete template

Permanently removes the template. Existing requests created from it are not affected.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from 'paraph';
import type { DeleteTemplateRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTemplateRequest;

  try {
    const data = await api.deleteTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Template deleted |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadTemplate

> Blob downloadTemplate(id)

Download template PDF

Returns the original PDF that was uploaded when the template was created.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from 'paraph';
import type { DownloadTemplateRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadTemplateRequest;

  try {
    const data = await api.downloadTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | PDF file |  * Content-Disposition - attachment; filename&#x3D;\&quot;template.pdf\&quot; <br>  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTemplate

> TemplateResponse getTemplate(id)

Get template detail

Returns the template with its detected form fields and signature placements.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from 'paraph';
import type { GetTemplateRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTemplateRequest;

  try {
    const data = await api.getTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template detail with fields |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTemplates

> TemplateListResponse listTemplates(page, pageSize)

List templates

Returns all templates in your account, newest first.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from 'paraph';
import type { ListTemplatesRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListTemplatesRequest;

  try {
    const data = await api.listTemplates(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**TemplateListResponse**](TemplateListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of templates |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTemplate

> TemplateResponse updateTemplate(id, updateTemplateRequest)

Update template

Change the template name, metadata, or signature placements. Omitted fields are left unchanged.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from 'paraph';
import type { UpdateTemplateOperationRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTemplateRequest
    updateTemplateRequest: {"name":"Employment Agreement v2","metadata":{"category":"hr","year":"2026"},"signature_placements":[{"signer_label":"Employee","page_number":1,"x":100.0,"y":650.0,"width":200.0,"height":50.0}]},
  } satisfies UpdateTemplateOperationRequest;

  try {
    const data = await api.updateTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateTemplateRequest** | [UpdateTemplateRequest](UpdateTemplateRequest.md) |  | |

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated template |  -  |
| **400** | Validation error |  -  |
| **404** | Resource not found |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

