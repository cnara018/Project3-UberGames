const proxy = require("http-proxy-middleware");

module.exports = (app)=> {
    console.log("Enviroment: "+process.env);
    app.use(proxy("/api/**", { 
        //target: "http://localhost:5000/" ||  "https://ubergamesapp.herokuapp.com/"}
        target:  "https://ubergamesapp.herokuapp.com/"}
        ));
};