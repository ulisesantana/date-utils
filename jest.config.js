module.exports = {
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)?$": "ts-jest",
  },
};
