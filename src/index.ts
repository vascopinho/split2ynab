import "dotenv/config";
import { Scheduler } from "./services/SchedulerService";

export const START_TIME = new Date();

const scheduler = new Scheduler();
scheduler.initScheduler();
