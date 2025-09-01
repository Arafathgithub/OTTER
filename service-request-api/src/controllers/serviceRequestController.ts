class ServiceRequestController {
    constructor(serviceRequestService) {
        this.serviceRequestService = serviceRequestService;
    }

    async createRequest(req, res) {
        try {
            const requestData = req.body;
            const newRequest = await this.serviceRequestService.createRequest(requestData);
            res.status(201).json(newRequest);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getRequest(req, res) {
        try {
            const requestId = req.params.id;
            const request = await this.serviceRequestService.getRequest(requestId);
            if (!request) {
                return res.status(404).json({ message: 'Request not found' });
            }
            res.status(200).json(request);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateRequest(req, res) {
        try {
            const requestId = req.params.id;
            const updatedData = req.body;
            const updatedRequest = await this.serviceRequestService.updateRequest(requestId, updatedData);
            if (!updatedRequest) {
                return res.status(404).json({ message: 'Request not found' });
            }
            res.status(200).json(updatedRequest);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteRequest(req, res) {
        try {
            const requestId = req.params.id;
            const deletedRequest = await this.serviceRequestService.deleteRequest(requestId);
            if (!deletedRequest) {
                return res.status(404).json({ message: 'Request not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ServiceRequestController;