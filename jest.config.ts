import nextJest from 'next/jest'
import type { Config } from '@jest/types'

export const customJestConfig: Config.InitialOptions = {
    coverageProvider: 'v8',
    clearMocks: true,
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
}

export const createJestConfig = nextJest({
    dir: './',
})

const jestConfig = async () => {
    const nextJestConfig = await createJestConfig(customJestConfig)()
    return {
        ...nextJestConfig,
        moduleNameMapper: {
            // Workaround to put our SVG mock first
            '\\.svg$': '<rootDir>/__mocks__/svg.js',
            ...nextJestConfig.moduleNameMapper,
        },
    }
}

module.exports = jestConfig
