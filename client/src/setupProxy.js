const proxy = require("http-proxy-middleware");

module.exports = (app)=> {
    console.log("Enviroment: "+process.env);
    app.use(proxy("/api/**", { 
        target: "http://localhost:5000/",
        //target:  "https://ubergamesapp.herokuapp.com/",
        changeOrigin: true
        }
        ));
};