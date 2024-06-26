import MockClient from './Mock';
import axios, {AxiosResponse} from "axios";

let debugMode = true; // Set this to true if you are in debug mode


class ApiClient {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: "/api",
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

  async listSessions(username?: string, mode?: string, last?: number) {
    try {
      const response = await this.client.get("/sessions", {
        params: {last: last, username: username, mode: mode || 'short'}
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

  async submitQuery(id: string, question: string, username?: string, args?: any) {
    try {
      const response = await this.client.post("/pipeline/default/run", {"session_id": id, "question": question}, {
        headers: {'x-username': username || 'guest'}
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error(error.message);
      return this.handleError(error);
    }
  }
}


function getClient() {
  if (debugMode) {
    return new MockClient();
  } else {
    return new ApiClient();  // Return the real client here
  }
}

const Client = getClient();

export default Client;