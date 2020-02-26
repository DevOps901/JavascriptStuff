function getGradInfo(){

    //let requestURL = 'https://raw.githubusercontent.com/Gradgital/Doctrina2020/master/database/data.json';
    //let request = new XMLHttpRequest();
    //request.open('GET', requestURL);

    //request.responseType = 'json';
    //request.send();
    //request.onload = function() {const graduates = request.response;}

    var json = require('./data.json'); //(with path)
    var grads = JSON.parse(json);
    
    // var Grads = [];
    // for (var i=0; i<json.length; i++) {
    //     Grads[i] = {
    //         photo: graduates[i]["Photo"],
    //         name: graduates[i]["Name"],
    //         year: graduates[i]["Year"],
    //         program: graduates[i]["Program"],
    //         githublink: graduates[i]["GithubLink"],
    //     };
    // }
    // console.log(Grads)
    
    return grads;
}