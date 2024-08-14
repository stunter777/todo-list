module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',  // Используем ts-jest для обработки TypeScript файлов
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        '/node_modules/(?!@mui)',  // Игнорируем node_modules, но добавляем исключение для MUI
    ],
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.js',  // Указываем путь к файлу настройки тестов
    ],
};
