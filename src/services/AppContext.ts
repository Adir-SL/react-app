import { createContext } from 'react';

function generateSessionId() {
  return Math.floor(Math.random() * 1000000).toString();
}

interface AppState {
  sessionId: string;
  setSessionId: (id: string) => void;
  username: string;
  setUsername: (username: string) => void;
}

export const AppContext = createContext<AppState>({
    sessionId: '',
    setSessionId: () => {},
    username: '',
    setUsername: () => {},
    });

export default AppContext;
export { generateSessionId };
