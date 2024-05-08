import axios from "axios";
export const baseURL = "http://localhost:5000";
export const headers = { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" };
export default axios.create({ baseURL, headers });
export const http = axios.create({ baseURL, headers });
const tokenString = localStorage.getItem('token');
export const token = tokenString || null;
headers.Authorization = token;
const httpAuthentication = axios.create({ baseURL, headers });
headers['Content-type'] = "multipart/form-data"
export const httpUploadAuth = axios.create({ baseURL, headers });

httpAuthentication.interceptors.response.use(async (response) => {
        return response;
}, async (error) => {
    
    // For Unauthorized
    if (error.response?.status == 401) {
        if (error.response?.data?.formMiddleWare && error.response?.data?.sentToSubscriptionExpirePage) {
            localStorage.removeItem('token');
            window.location.href = '/subscription-expired';
            return;
        };
        if (error.response?.data?.formMiddleWare && error.response?.data?.switchToSysAdmin) {
            window.location.href = '/settings/billing';
            return;
        };

        clearAllSession(true)
    }

    return Promise.reject(error);
});

export const httpAuth = httpAuthentication;