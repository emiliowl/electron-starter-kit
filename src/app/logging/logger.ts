import { createLogger, format, transports } from "winston";

export function createDefaultLogger() {
    const logger = createLogger({
        level: "info",
        format: format.combine(format.errors({ stack: true }), format.timestamp(), format.json()),
        transports: [new transports.Console()],
    });

    return logger;
}

export const logger = createDefaultLogger();