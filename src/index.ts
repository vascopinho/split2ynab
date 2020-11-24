import "dotenv/config";
import { Scheduler } from "./services/SchedulerService";
import logger from "./utils/Logger";

export const START_TIME = new Date();
logger.info(`Split2YNAB app started`);

const scheduler = new Scheduler();
scheduler.initScheduler();
