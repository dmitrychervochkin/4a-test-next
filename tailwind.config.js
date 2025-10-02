module.exports = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "blink-color": {
                    "0%, 50%, 100%": { color: "#ff4e4e" },
                    "25%, 75%": { color: "#ffffff" },
                },
            },
            animation: {
                "blink-color": "blink-color 1.5s step-start infinite",
            },
        },
        screens: {
            "max-md": { max: "800px" }, 
            "max-sm": { max: "375px" },
            "max-xs": { max: "320px" },
        },
    },
    plugins: [],
};
