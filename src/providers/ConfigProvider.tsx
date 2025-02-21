import React, { createContext, useContext, ReactNode } from 'react';
import dotenv from 'dotenv';

dotenv.config();

type Config = {
  [key: string]: string | undefined;
};

const ConfigContext = createContext<Config | undefined>(undefined);

type ConfigProviderProps = {
  children: ReactNode;
};

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const config: Config = {
    FIGHTHUB_URL: process.env.FIGHTHUB_URL,
  };

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};

const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export { ConfigProvider, useConfig };