module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
}
