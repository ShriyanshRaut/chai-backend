class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode        // ✅ parameter name matches
        this.data = data                    // ✅ actually assign data
        this.message = message
        this.success = statusCode < 400     // ✅ now works
    }
}
export { ApiResponse }