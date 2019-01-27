var config = {
    apiKey: "AIzaSyDLCujwqD9Ix9TNBu_SHsDEwMR_-iSVawE",
    authDomain: "workbettercc.firebaseapp.com",
    databaseURL: "https://workbettercc.firebaseio.com",
    projectId: "workbettercc",
    storageBucket: "workbettercc.appspot.com",
    messagingSenderId: "482314606873"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

search("p");

  function search(key) {
      key = key.toLowerCase();
    var results = [];
    firestore.collection("Users").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var found = false;
            for(var i = 0; i < doc.data().Skills.length; i++) {
                if((doc.data().Skills[i]).toLowerCase().includes(key) && !found) {
                    //console.log(doc.id, " => ", doc.data().Skills[i]);
                    found = true;
                    var arr = [];
                    arr.push(doc.data().FirstName);
                    arr.push(doc.data().LastName);
                    arr.push(doc.data().Skills);
                    console.log(arr);
                }
            }
            if((doc.data().FirstName).toLowerCase().includes(key) && !found) {
                //console.log(doc.id, " => ", doc.data().FirstName);
                var arr = [];
                arr.push(doc.data().FirstName);
                arr.push(doc.data().LastName);
                arr.push(doc.data().Skills);
                console.log(arr);

            } else if((doc.data().LastName).toLowerCase().includes(key) && !found) {
                //console.log(doc.id, " => ", doc.data().LastName);
                var arr = [];
                arr.push(doc.data().FirstName);
                arr.push(doc.data().LastName);
                arr.push(doc.data().Skills);
                console.log(arr);
            }
        });
    });
    return results;
}

function printData(doc) {
    console.log("==========================");
    console.log(doc.data().FirstName);
    console.log(doc.data().LastName);
    console.log(doc.data().Email);
    console.log(doc.data().HighSchool);
    console.log(doc.data().Location);
    console.log(doc.data().Description);
    console.log(doc.data().Skills);
    console.log(doc.data().TaskIDs);
    console.log(doc.data().PowerLevel);
    console.log(doc.data().ProfilePic);
}