// function getGradInfo(){

    // let requestURL = 'https://raw.githubusercontent.com/Gradgital/Doctrina2020/master/database/data.json';
    // let request = new XMLHttpRequest();
    // request.open('GET', requestURL);

    // request.responseType = 'json';
    // request.send();
    // var  graduates = NaN;
    
    // request.onload = function() {
    //    let graduates = request.response;
    // }
    // console.log(graduates)



//     var json = require('C:\Users\devin.azzie\Documents\GitHub\JavascriptStuff\data.json'); //(with path)
//     var grads = JSON.parse(json);
    
//     // var Grads = [];
//     // for (var i=0; i<json.length; i++) {
//     //     Grads[i] = {
//     //         photo: graduates[i]["Photo"],
//     //         name: graduates[i]["Name"],
//     //         year: graduates[i]["Year"],
//     //         program: graduates[i]["Program"],
//     //         githublink: graduates[i]["GithubLink"],
//     //     };
//     // }
//     // console.log(Grads)

    

//      return grads;
//  }
// var grads = JSON.parse(json);

class FileReader{
    constructor(fileLoc){
        this.Data = null;
        this.set = false;
        this.readTextFile(fileLoc, this.CBReader);
    }

    readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                var data = callback(rawFile.responseText)
                this.set = true;
                this.Data = data;
                
            }
        }
        rawFile.send(null);
    }
    
    CBReader(text){
        console.log(text);
        var Grads = JSON.parse(text);
        return Grads;
    }

    sendData(){
        return this.Data;
    }

}

var source = new FileReader('https://raw.githubusercontent.com/Gradgital/Doctrina2020/master/database/data.json');
console.log("Run function");
console.log(source.sendData());



//usage:


// fetch('https://raw.githubusercontent.com/Gradgital/Doctrina2020/master/database/data.json')
//   .then(res => res.json())
//   .then(json => {
//     //json vaiable contains object with data
//   })

//   console.log(json)

