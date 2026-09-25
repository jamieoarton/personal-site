import { initBotId } from "botid/client/core";

// Attaches BotID's classification headers to requests the server verifies
// with checkBotId(). Every protected route must be listed here, or the
// server-side check fails closed.
initBotId({
  protect: [{ path: "/api/subscribe", method: "POST" }],
});
