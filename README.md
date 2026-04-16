# paraph

TypeScript/JavaScript client for the [Paraph API](https://paraph.dev). Upload PDF templates, fill fields, send for signing.

## Install

```bash
npm install paraph
```

## Usage

```ts
import { Configuration, TemplatesApi, RequestsApi } from "paraph";

const config = new Configuration({ accessToken: "YOUR_API_KEY" });

// List templates
const templatesApi = new TemplatesApi(config);
const { templates } = await templatesApi.listTemplates({});
for (const t of templates) {
  console.log(t.id, t.name);
}

// Create a request (fill a PDF)
const requestsApi = new RequestsApi(config);
const result = await requestsApi.createRequest({
  createRequestRequest: {
    template_id: "TEMPLATE_ID",
    fields: { name: "Jane Doe", date: "2026-04-15" },
  },
});
console.log(result.request.id);
```

## Auth

All requests need a Bearer token. Get an API key from your Paraph dashboard under Admin > API Keys.

```ts
const config = new Configuration({ accessToken: process.env.PARAPH_API_KEY });
```

## Docs

Full API reference at [paraph.dev/docs](https://paraph.dev/docs).

## License

MIT
