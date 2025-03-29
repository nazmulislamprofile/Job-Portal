// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://8727da5f3ce679295078ed816b32b91d@o4509055546556416.ingest.us.sentry.io/4509055555272704",
  integrations: [Sentry.mongooseIntegration()],
  // Set sampling rate for profiling - this is evaluated only once per SDK.init
  profileSessionSampleRate: 1.0,
});