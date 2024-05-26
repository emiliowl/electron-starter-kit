import { logger } from "./logging/logger";
export function healthcheck() {
    return "it's alive!";
}

async function main() {
    logger.info(healthcheck());
}

main();