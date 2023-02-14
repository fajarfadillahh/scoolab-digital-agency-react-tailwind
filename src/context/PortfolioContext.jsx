import React, { createContext, useState } from "react";

// import portfolio data
import { PortfolioData } from "../Data";

// create portfolio context
export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState(PortfolioData);

  return (
    <PortfolioContext.Provider value={{ portfolios }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
