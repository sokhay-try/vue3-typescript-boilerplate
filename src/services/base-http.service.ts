import axios, { AxiosError } from "axios";

export default class BaseHttpService {
  BASE_URL = process.env.VUE_APP_BACKEND_ADDR || "http://localhost:9000";
  _accessToken: string | null = null;

  constructor() {
    //
  }

  async get(endpoint: string, options = {}): Promise<any> {
    Object.assign(options, this._getCommonOptions());
    return axios
      .get(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  async post(endpoint: string, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async delete(endpoint: string, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  async patch(endpoint: string, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .patch(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  _handleHttpError = (error: AxiosError) => {
    // all the error responses
    const status = error.response?.status;

    if (status !== 401) {
      throw error;
    } else {
      return this._handle401();
    }
  };

  _handle401() {
    window.location.hash = "/login";
  }

  _getCommonOptions() {
    const token = this.loadToken();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken(accessToken: string) {
    this._accessToken = accessToken;
    return localStorage.setItem("accessToken", accessToken);
  }

  loadToken() {
    const token = localStorage.getItem("accessToken");
    this._accessToken = token;
    return token;
  }

  removeToken() {
    localStorage.removeItem("accessToken");
  }
}
