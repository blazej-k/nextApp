if (typeof window === "undefined") {
    const server = require('./server.ts').default;
    server.listen({ onUnhandledRequest: "bypass" })
} else {
    const worker = require("./browser.ts").default;
    worker.start({ onUnhandledRequest: "bypass" });
}

export { }; 