# SignersApi

All URIs are relative to *https://paraph.dev/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadSignerSignature**](SignersApi.md#downloadsignersignature) | **GET** /requests/{id}/signers/{sid}/signature | Download signer signature |
| [**resendSigningLink**](SignersApi.md#resendsigninglink) | **POST** /requests/{id}/signers/{sid}/resend | Resend signing link |



## downloadSignerSignature

> Blob downloadSignerSignature(id, sid)

Download signer signature

Returns the stored signature image (PNG) for a signer who has completed signing, either via the signing page or a pre-provided override_signature_url. 

### Example

```ts
import {
  Configuration,
  SignersApi,
} from 'paraph';
import type { DownloadSignerSignatureRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SignersApi(config);

  const body = {
    // string | Request ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Signer ID
    sid: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadSignerSignatureRequest;

  try {
    const data = await api.downloadSignerSignature(body);
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
| **id** | `string` | Request ID | [Defaults to `undefined`] |
| **sid** | `string` | Signer ID | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signature image |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendSigningLink

> ResendSigningLink200Response resendSigningLink(id, sid)

Resend signing link

Generates a new signing link and resends the signing email. The previous link is invalidated. Only works for signers with status &#x60;pending&#x60;. 

### Example

```ts
import {
  Configuration,
  SignersApi,
} from 'paraph';
import type { ResendSigningLinkRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SignersApi(config);

  const body = {
    // string | Request ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Signer ID
    sid: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ResendSigningLinkRequest;

  try {
    const data = await api.resendSigningLink(body);
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
| **id** | `string` | Request ID | [Defaults to `undefined`] |
| **sid** | `string` | Signer ID | [Defaults to `undefined`] |

### Return type

[**ResendSigningLink200Response**](ResendSigningLink200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New signing link sent |  -  |
| **409** | Invalid state transition |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

