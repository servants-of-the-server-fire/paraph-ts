"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = process.env.PARAPH_API_KEY;
        if (!apiKey) {
            console.error("PARAPH_API_KEY must be set");
            process.exit(1);
        }
        const config = new __1.Configuration({
            accessToken: apiKey,
            basePath: process.env.PARAPH_BASE_URL,
        });
        console.log("→ GET /account");
        const accountApi = new __1.AccountApi(config);
        const { account } = yield accountApi.getAccount();
        console.log(`  team=${JSON.stringify(account.team_name)} plan=${account.plan} sandbox=${account.sandbox_mode}`);
        console.log("→ GET /templates");
        const templatesApi = new __1.TemplatesApi(config);
        const { templates } = yield templatesApi.listTemplates({});
        console.log(`  ${templates.length} template(s)`);
        templates.slice(0, 5).forEach((t) => console.log(`  - ${t.id}  ${JSON.stringify(t.name)}`));
        if (templates.length > 5)
            console.log(`  ... (${templates.length - 5} more)`);
        console.log("ok");
    });
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
