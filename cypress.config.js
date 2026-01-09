const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        charts: true,
        reportPageTitle: 'Relatório de Testes API',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        overwrite: true // Isso aqui é importante
    },
    e2e: {
        baseUrl: 'https://demoqa.com',
        specPattern: "**/*.feature",
        async setupNodeEvents(on, config) {
            // Importante: inicializa o plugin do reporter
            require('cypress-mochawesome-reporter/plugin')(on);
            
            await addCucumberPreprocessorPlugin(on, config);

            on("file:preprocessor", createBundler({
                plugins: [createEsbuildPlugin(config)],
            }));

            return config;
        },
    },
});