const fs = require('fs');
const testFolder = "../Data";

fs.readdir(testFolder, function(err, data){
    console.log(data);
});