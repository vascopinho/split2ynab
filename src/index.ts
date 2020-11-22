import "dotenv/config";
import { Scheduler } from "./services/SchedulerService";

export const START_TIME = new Date();
console.log(START_TIME);

const scheduler = new Scheduler();
scheduler.initScheduler();
