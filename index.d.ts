declare module "*.json" {
    export const date: number;
    export const repos: any;
}

// declare var process: any
declare namespace NodeJS {
    export interface ProcessEnv {
        MAIN_COLLECTION_NAME: string;
        DYNAMIC_COLLECTION_NAME: string;
        ERROR_COLLECTION_NAME: string;
        DB_NAME: string;
        API_PORT: string;
        FRONT_PORT: string;
        DROPLET_ADDRESS: string;
        JOB_INTERVAL: string;
        DB_USERNAME: string;
        DB_PASSWORD: string;
    }
}