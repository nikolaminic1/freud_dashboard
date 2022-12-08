import axios from "axios";

export function loginApi() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return axios.create({
    baseURL: "http://localhost:8070/login",
    headers: headers,
  });
}

export function noAuthApi() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return axios.create({
    baseURL: "http://localhost:8070/api/auth/",
    headers: headers,
  });
}

export function genericApi() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return axios.create({
    baseURL: "http://localhost:8070/",
    headers: headers,
  });
}

export function authApi() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access")}`,
    Accept: "application/json",
  };

  return axios.create({
    baseURL: "http://localhost:8070/api/auth/",
    headers: headers,
  });
}

export function jwtApi() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access")}`,
    Accept: "application/json",
  };

  return axios.create({
    baseURL: "http://localhost:8070/",
    headers: headers,
  });
}
