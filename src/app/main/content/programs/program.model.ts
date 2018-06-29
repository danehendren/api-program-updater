export class Program {
    _id?: string;
    name: string;
    applicationId: number;
    version: number;
    constructor() {
        this.name = 'My new program';
        this.applicationId = 0;
        this.version = 1.0;
    }
}

interface Error {
    code: number;
    message: string;
}

export interface Response {
    meta: {
        status: boolean;
        count: number;
        page: number;
        perPage: number;
        error?: Error;
    };
}

export interface ProgramResponse extends Response {
    data: Program;
}

export interface ProgramCollectionResponse extends Response {
    data: Program[];
}
