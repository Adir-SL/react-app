import Data from '../assets/aa.json';

class MockClient {

  async listSessions(last?: number, username?: string) {
    return [{ name: "4341dc17e6ee4cc69de24a3f391ac658", description: "Session 1" },
      { name: "30a933a24ded4d2eb893570f2ada2bd1", description: "Session 2" }];
  }

  async getSession(id?: string, username?: string) {
      if (id) {
        return {
            "name": "5c3c04ce538d461d91931112e14c0a37",
            "username": "yhaviv@gmail.com",
            "agent_name": null,
            "history": [ {"role": "AI","content": "Hi, How can I help you today?"}]
        };
      }
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

export default MockClient;