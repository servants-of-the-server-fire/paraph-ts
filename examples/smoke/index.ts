// Smoke test for the Paraph TypeScript SDK — calls GET /account and GET /templates
// against a live instance, prints the results. Read-only; safe to run.
//
// Usage:
//
//   PARAPH_API_KEY=your-key npx tsx examples/smoke/index.ts
//
// Optional:
//
//   PARAPH_BASE_URL=http://localhost:8080/api/v1 PARAPH_API_KEY=... npx tsx examples/smoke/index.ts

import { Configuration, AccountApi, TemplatesApi } from "../..";

async function main() {
  const apiKey = process.env.PARAPH_API_KEY;
  if (!apiKey) {
    console.error("PARAPH_API_KEY must be set");
    process.exit(1);
  }

  const config = new Configuration({
    accessToken: apiKey,
    basePath: process.env.PARAPH_BASE_URL,
  });

  console.log("→ GET /account");
  const accountApi = new AccountApi(config);
  const { account } = await accountApi.getAccount();
  console.log(`  team=${JSON.stringify(account.team_name)} plan=${account.plan} sandbox=${account.sandbox_mode}`);

  console.log("→ GET /templates");
  const templatesApi = new TemplatesApi(config);
  const { templates } = await templatesApi.listTemplates({});
  console.log(`  ${templates.length} template(s)`);
  templates.slice(0, 5).forEach((t) => console.log(`  - ${t.id}  ${JSON.stringify(t.name)}`));
  if (templates.length > 5) console.log(`  ... (${templates.length - 5} more)`);

  console.log("ok");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
