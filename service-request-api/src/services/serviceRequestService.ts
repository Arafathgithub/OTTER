export class ServiceRequestService {
    private serviceRequests: any[] = [];

    createRequest(request: any) {
        const newRequest = {
            requestNumber: this.generateRequestNumber(),
            description: request.description,
            status: 'Open',
            timestamp: new Date(),
            assignedTo: request.assignedTo,
            attachment: request.attachment,
            workNote: request.workNote,
            CTI: request.CTI
        };
        this.serviceRequests.push(newRequest);
        return newRequest;
    }

    getRequest(requestNumber: string) {
        return this.serviceRequests.find(req => req.requestNumber === requestNumber);
    }

    updateRequest(requestNumber: string, updatedData: any) {
        const requestIndex = this.serviceRequests.findIndex(req => req.requestNumber === requestNumber);
        if (requestIndex !== -1) {
            this.serviceRequests[requestIndex] = {
                ...this.serviceRequests[requestIndex],
                ...updatedData
            };
            return this.serviceRequests[requestIndex];
        }
        return null;
    }

    deleteRequest(requestNumber: string) {
        const requestIndex = this.serviceRequests.findIndex(req => req.requestNumber === requestNumber);
        if (requestIndex !== -1) {
            return this.serviceRequests.splice(requestIndex, 1)[0];
        }
        return null;
    }

    private generateRequestNumber() {
        return `REQ-${Math.floor(Math.random() * 1000000)}`;
    }
}