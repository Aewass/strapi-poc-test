"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::logger",
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "https://market-assets.strapi.io",
                    ],
                    "media-src": ["'self'", "data:", "blob:"],
                    upgradeInsecureRequests: null,
                },
            },
            cors: {
                enabled: true,
                origin: ["http://localhost:3000", "http://localhost:4321"], // Add your Astro dev server port
                headers: ["*"],
            },
        },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
