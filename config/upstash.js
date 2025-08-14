import { Client as WorkflowClient, WorkflowError } from "@upstash/workflow";

import { QSTASH_TOKEN,QSTASH_URL } from "./env.js";


export const WorkflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,

});