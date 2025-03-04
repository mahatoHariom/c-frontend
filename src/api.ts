import axios from "axios";

const API_URL = "https://backed-teal.vercel.app/api";

export interface FollowUp {
  id: string;
  patientId: string;
  scheduledAt: string;
  status: string;
  response: string | null;
  createdAt: string;
  patient: {
    id: string;
    name: string;
    procedure: string;
    createdAt: string;
  };
}

export interface Notification {
  id: string;
  message: string;
  createdAt: string;
  followUpId?: string;
}

export const api = {
  addPatient: (data: { name: string; procedure: string }) =>
    axios.post(`${API_URL}/patients`, data),
  getFollowUps: () => axios.get<FollowUp[]>(`${API_URL}/follow-ups`),
  respondToFollowUp: (data: {
    followUpId: string;
    status: "HEALTHY" | "CONCERN";
    response?: string;
  }) => axios.post<FollowUp>(`${API_URL}/respond`, data),
  getNotifications: () => axios.get<Notification[]>(`${API_URL}/notifications`),
};
