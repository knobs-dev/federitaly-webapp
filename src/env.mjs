import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  client: {
    API_ENDPOINT: z.string().min(1),
  },
  runtimeEnv: process.env,
});

export default env;
