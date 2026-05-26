const ua = process.env.npm_config_user_agent || "";
const isCI =
  process.env.CI === "true" ||
  !!process.env.VERCEL ||
  !!process.env.REPL_ID;

const isPnpm = ua.startsWith("pnpm/");

if (!isPnpm && !isCI) {
  console.error("Use pnpm instead");
  process.exit(1);
}
