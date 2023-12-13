import { HTTPRequestLogger } from "./HTTPRequestLogger";
import { HTTPResponseLogger } from "./HTTPResponseLogger";

type Middelware = typeof HTTPRequestLogger | typeof HTTPResponseLogger;

const middlewares = <Middelware[]>[HTTPRequestLogger, HTTPResponseLogger];

export { middlewares };
