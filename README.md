# paraph@0.1.0

A TypeScript SDK client for the paraph.dev API.

## Usage

First, install the SDK from npm.

```bash
npm install paraph --save
```

Next, try it out.


```ts
import {
  Configuration,
  AccountApi,
} from 'paraph';
import type { GetAccountRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getAccount();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://paraph.dev/api/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AccountApi* | [**getAccount**](docs/AccountApi.md#getaccount) | **GET** /account | Get account info
*RequestsApi* | [**cancelRequest**](docs/RequestsApi.md#cancelrequest) | **POST** /requests/{id}/cancel | Cancel request
*RequestsApi* | [**createRequest**](docs/RequestsApi.md#createrequestoperation) | **POST** /requests | Create request
*RequestsApi* | [**downloadRequest**](docs/RequestsApi.md#downloadrequest) | **GET** /requests/{id}/download | Download request PDF
*RequestsApi* | [**getRequest**](docs/RequestsApi.md#getrequest) | **GET** /requests/{id} | Get request detail
*RequestsApi* | [**listRequests**](docs/RequestsApi.md#listrequests) | **GET** /requests | List requests
*SignersApi* | [**downloadSignerSignature**](docs/SignersApi.md#downloadsignersignature) | **GET** /requests/{id}/signers/{sid}/signature | Download signer signature
*SignersApi* | [**resendSigningLink**](docs/SignersApi.md#resendsigninglink) | **POST** /requests/{id}/signers/{sid}/resend | Resend signing link
*TemplatesApi* | [**createTemplate**](docs/TemplatesApi.md#createtemplate) | **POST** /templates | Create template
*TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deletetemplate) | **DELETE** /templates/{id} | Delete template
*TemplatesApi* | [**downloadTemplate**](docs/TemplatesApi.md#downloadtemplate) | **GET** /templates/{id}/download | Download template PDF
*TemplatesApi* | [**getTemplate**](docs/TemplatesApi.md#gettemplate) | **GET** /templates/{id} | Get template detail
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /templates | List templates
*TemplatesApi* | [**updateTemplate**](docs/TemplatesApi.md#updatetemplateoperation) | **PATCH** /templates/{id} | Update template
*WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createwebhookoperation) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{id} | Delete webhook
*WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getwebhook) | **GET** /webhooks/{id} | Get webhook
*WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**testWebhook**](docs/WebhooksApi.md#testwebhook) | **POST** /webhooks/{id}/test | Test webhook
*WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updatewebhookoperation) | **PATCH** /webhooks/{id} | Update webhook


### Models

- [Account](docs/Account.md)
- [AccountLimits](docs/AccountLimits.md)
- [AccountUsage](docs/AccountUsage.md)
- [CreateRequestRequest](docs/CreateRequestRequest.md)
- [CreateWebhook201Response](docs/CreateWebhook201Response.md)
- [CreateWebhook201ResponseWebhook](docs/CreateWebhook201ResponseWebhook.md)
- [CreateWebhookRequest](docs/CreateWebhookRequest.md)
- [DocumentRequest](docs/DocumentRequest.md)
- [DocumentRequestSummary](docs/DocumentRequestSummary.md)
- [ErrorError](docs/ErrorError.md)
- [Field](docs/Field.md)
- [GetAccount200Response](docs/GetAccount200Response.md)
- [ListInfo](docs/ListInfo.md)
- [ModelError](docs/ModelError.md)
- [RequestListResponse](docs/RequestListResponse.md)
- [RequestResponse](docs/RequestResponse.md)
- [RequestStatus](docs/RequestStatus.md)
- [ResendSigningLink200Response](docs/ResendSigningLink200Response.md)
- [SignaturePlacement](docs/SignaturePlacement.md)
- [SignaturePlacementInput](docs/SignaturePlacementInput.md)
- [Signer](docs/Signer.md)
- [SignerInput](docs/SignerInput.md)
- [SignerStatus](docs/SignerStatus.md)
- [Template](docs/Template.md)
- [TemplateDetail](docs/TemplateDetail.md)
- [TemplateListResponse](docs/TemplateListResponse.md)
- [TemplateResponse](docs/TemplateResponse.md)
- [UpdateTemplateRequest](docs/UpdateTemplateRequest.md)
- [UpdateWebhookRequest](docs/UpdateWebhookRequest.md)
- [Webhook](docs/Webhook.md)
- [WebhookDelivery](docs/WebhookDelivery.md)
- [WebhookDeliveryData](docs/WebhookDeliveryData.md)
- [WebhookEvent](docs/WebhookEvent.md)
- [WebhookListResponse](docs/WebhookListResponse.md)
- [WebhookResponse](docs/WebhookResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `0.1.0`
- Generator version: `7.22.0-SNAPSHOT`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://paraph.dev](https://paraph.dev)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
