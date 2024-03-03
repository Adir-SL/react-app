import Data from './assets/aa.json';

class MockClient {

  async listSessions(last?: number, username?: string) {
    return [{ session_id: "4341dc17e6ee4cc69de24a3f391ac658", topic: "Session 1" },
      { session_id: "30a933a24ded4d2eb893570f2ada2bd1", topic: "Session 2" }];
  }

  async getSession(id?: string, username?: string) {
    return Data;
  }

  async submitQuery(id: string, question: string, args?: any) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ answer: "I don't know", sources: null, state: {}});
        }, 2000);
    });
  }
}

export default new MockClient();