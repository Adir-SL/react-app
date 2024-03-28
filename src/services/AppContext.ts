import { createContext } from 'react';

function generateSessionId() {
  return Math.floor(Math.random() * 1000000).toString();
}

interface AppState {
  sessionId: string;
  setSessionId: (id: string) => void;
  username: string;
  setUsername: (username: string) => void;
  admin: boolean;
  setAdmin: (admin: boolean) => void;
}

export const AppContext = createContext<AppState>({
    sessionId: '',
    setSessionId: () => {},
    username: '',
    setUsername: () => {},
    admin: false,
    setAdmin: () => {},
    });

export default AppContext;
export { generateSessionId };
