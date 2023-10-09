module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mdx'],
  transform: {
    '.+\\.(css)$': 'jest-css-modules-transform',
    '^.+\\.[tj]sx?$': './jest.transform.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(ssr-window|dom7)/)'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/.*(/.next|node_modules|coverage|test_reports|dist)($|/.*)',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css)$': require.resolve(
      'next/dist/build/jest/__mocks__/styleMock.js',
    ),
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': require.resolve(
      'next/dist/build/jest/__mocks__/fileMock.js',
    ),
    'next/font/(.*)': require.resolve(
      'next/dist/build/jest/__mocks__/nextFontMock.js',
    ),
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test_reports',
        outputName: 'jest-junit.xml',
      },
    ],
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/app/api/**/*.{js,jsx,ts,tsx}',
  ],
};
