// API settings
export interface ApiSettings {
    url: string;            // base url for api calls
    retryCount: number;    
}

// API settings
export interface ApplicationSettings {
    appHeaderTitle: string;
    localStorageToken: string;
    maxProducts: number;
    productsPerPage: number;
}

// environment settings container
export interface CustomSettings {
    api: ApiSettings;
    application: ApplicationSettings;
}
