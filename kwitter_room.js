
const firebaseConfig = {
  apiKey: "AIzaSyCKmQEjSyepmAmla14tcrlUrIMODYVXJnE",
  authDomain: "kwitter-42a50.firebaseapp.com",
  databaseURL: "https://kwitter-42a50-default-rtdb.firebaseio.com",
  projectId: "kwitter-42a50",
  storageBucket: "kwitter-42a50.appspot.com",
  messagingSenderId: "893423484389",
  appId: "1:893423484389:web:f062ebd03321888b2d030c",
  measurementId: "G-2FH424ZD6P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_Names+" onclick= 'redirectToRoomName(this.id)'>#" + Room_Names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code 
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}