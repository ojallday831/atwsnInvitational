var config = {
    apiKey: "AIzaSyB1ier0r2yeE0CjRsPUCrKvJBF5pncOrTo",
    authDomain: "fortnitetournament-ba21c.firebaseapp.com",
    databaseURL: "https://fortnitetournament-ba21c.firebaseio.com",
    projectId: "fortnitetournament-ba21c",
    storageBucket: "fortnitetournament-ba21c.appspot.com",
    messagingSenderId: "941537702220"
    };
firebase.initializeApp(config);
console.log(firebase);
var database = firebase.database();
var ref = database.ref('Teams');

ref.on("child_added", snap => {
    var teamName = snap.child("teamName").val();
    var teamMember1 = snap.child("teamMember1").val();
    var teamMember2 = snap.child("teamMember2").val();
    var verified = snap.child("verified").val();
    if (verified == "no"){
        verified = "";
    }
    if(verified == null){
        verified = "";
    }
    //alert(teamName);
    $("#table_body").append("<tr><td>" + teamName + "</td><td>" + teamMember1 + "</td><td>" + teamMember2 + "</td><td>" + "<center>" + verified + "</center>" + "</td></tr>");
});

var database = firebase.database()
var refLink = database.ref('discordLink');
var refMessage = database.ref('discordMessage');
refMessage.on('value', gotMessage, errData)
refLink.on('value', gotData, errData);
function gotData(data){
    console.log(data.val());
    document.getElementById("discordLink").innerHTML = data.val();

}
function link(){
    var link = database.ref('discordLink');
    link.on('value', returnLink, errData)
    
}
function returnLink(link){
    var disLink = link.val();
    window.location.href=disLink

}
function gotMessage(message){
    document.getElementById("discordMessage").innerHTML = message.val();
}
function errData(err)
{
    
}


