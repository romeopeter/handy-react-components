import { envConfig } from "../env-config";

const env = envConfig;

// Base fetch wrapper with error handling
export const apiClient = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const url = `${env.apiBaseUrl}${endpoint}`;

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `HTTP ${response.status}: ${response.statusText}`
    );
  }

  return response.json();
};

// Endpoint functions
export const api = {
  // Auth
  auth: {
    login: (data: { email: string; password: string }) =>
      apiClient(`/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
      }),
    register: (userData: any) =>
      apiClient(`/auth/register`, {
        method: "POST",
        body: JSON.stringify(userData),
      }),
    forgotPassword: () => apiClient(`/auth/forgot-password`),
    resetPassword: () => apiClient(`/auth/reset-password`),
    verifyOtp: (userData: any) =>
      apiClient(`/auth/verify-otp`, {
        method: "POST",
        body: JSON.stringify(userData),
      }),
    verifyEmail: (email: string) =>
      apiClient(`/auth/verify-email`, {
        method: "POST",
        body: JSON.stringify({ email }),
      }),
  },

  // Cart
  cart: {
    getItems: () => apiClient("/cart/"),
    getItem: (itemId: number) => apiClient(`/cart/${itemId}`),
    addItem: (data: any) =>
      apiClient(`/cart/add`, {
        method: "POST",
        body: JSON.stringify(data),
      }),
    updateItemCount: (data: { itemId: number; quantity: number }) =>
      apiClient(`/cart/quantity`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    removeItem: (data: { itemId: number; quantity: number }) =>
      apiClient(`/cart/remove`, {
        method: "DELETE",
        body: JSON.stringify(data),
      }),
    clearCart: () => apiClient("/cart/clear"),
  },
};
