import MockClient from './Mock';
import React from 'react';
import axios, {AxiosResponse} from "axios";

let debugMode = true; // Set this to true if you are in debug mode


interface AppState {
  sessionId: string;
  setSessionId: (id: string) => void;
}

// Initialize the context with an empty object
export const AppContext = React.createContext<AppState>({
  sessionId: '',
  setSessionId: () => {},
});


class ApiClient {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8000/api",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });
  }

  private handleResponse(response: AxiosResponse) {
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      return null;
    }
  }

  private handleError(error: any) {
    console.error(error.message);
    return null;
  }

  async listSessions(last?: number, username?: string) {
    try {
      const response = await this.client.get("/sessions", {
        params: {
          last: last,
          username: username,
        },

      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getSession(id?: string, username?: string) {
    try {
      const response = await this.client.get(`/session/${id || '$last'}`, {
        headers: {'x-username': username || 'guest'}
      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async submitQuery(id: string, question: string, args?: any) {
    try {
      const response = await this.client.post("/query", {"session_id": id, "question": question});
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }
}

// export default new ApiClient();

// todo: add the ApiClient class here

function getClient() {
  if (debugMode) {
    return new MockClient();
  } else {
    return new ApiClient();  // Return the real client here
  }
}

const Client = getClient();

export default Client;