export interface ServiceRequest {
    requestNumber: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed';
    timestamp: Date;
    assignedTo: string;
    attachment?: string; // URL or path to the attachment
    workNote?: string; // Additional notes related to the work
    CTI?: string; // Customer Telephony Integration information
}

export class ServiceRequestModel {
    constructor(
        public requestNumber: string,
        public description: string,
        public status: 'open' | 'in-progress' | 'closed',
        public timestamp: Date,
        public assignedTo: string,
        public attachment?: string,
        public workNote?: string,
        public CTI?: string
    ) {}

    // Example method for validating the request
    validate(): boolean {
        // Add validation logic here
        return true;
    }

    // Example method for transforming data if needed
    transform(): any {
        // Add transformation logic here
        return {
            requestNumber: this.requestNumber,
            description: this.description,
            status: this.status,
            timestamp: this.timestamp,
            assignedTo: this.assignedTo,
            attachment: this.attachment,
            workNote: this.workNote,
            CTI: this.CTI,
        };
    }
}