export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.m?js$': 'babel-jest', 
  },
  coverageReporters: ['text', 'lcov',],
};
