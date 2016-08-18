/*jshint multistr:true */
text="a sd s fa f f a df f dodi af v asd a / dasdnasds sd asdjas f fofi dodi dodi dodi dodi sdas ddpod dodi";

var myName = "dodi";
var hits=[];

for(var i=0; i<text.length; i++) {
    if(text[i]==='d'){
        for(var j=i; j<(myName.length+i);j++){
            hits.push(text[j]);
        }
    }
}

if(hits.length===0){
    console.log("Your name wasn't found");
} else {
    console.log(hits);
}
