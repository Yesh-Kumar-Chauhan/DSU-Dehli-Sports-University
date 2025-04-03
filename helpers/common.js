const developmentApiEndPoint = process.env.NEXT_PUBLIC_DEVELOPMENT_API_ENDPOINT;
const productionApiEndPoint = process.env.NEXT_PUBLIC_PRODUCTION_API_ENDPOINT;
const currentEnvironment = process.env.NEXT_PUBLIC_ENV;

export const ApiEndPoint = (function () {
    if (currentEnvironment === 'production') {
        return productionApiEndPoint;
    } else {
        return developmentApiEndPoint;
    }
})();


export const SchoolSiteUrl = (function () {
    if (currentEnvironment === 'production') {
        return 'https://dss.dsu.ac.in/';
    } else {
        return 'http://10.134.77.7:8081/';
    }
})();