const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});
const jestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@data/(.*)$': '<rootDir>/data/$1',
        '^@models/(.*)$': '<rootDir>/models/$1',
        '^@pages/(.*)$': '<rootDir>/pages/$1',
        '^@styles/(.*)$': '<rootDir>/styles/$1',
    },
};

module.exports = createJestConfig(jestConfig);
