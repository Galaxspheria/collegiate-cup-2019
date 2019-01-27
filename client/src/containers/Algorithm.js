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
  var results = [];

  search("o");

  function search(key) {
    firestore.collection("Users").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var found = false;
            for(var i = 0; i < doc.data().Skills.length; i++) {
                if(doc.data().Skills[i].includes(key) && !found) {
                    console.log(doc.id, " => ", doc.data().Skills[i]);
                    found = true;
                    results.add(doc);
                }
            }
            if(doc.data().FirstName.includes(key) && !found) {
                console.log(doc.id, " => ", doc.data().FirstName);
                results.add(doc);
            } else if(doc.data().LastName.includes(key) && !found) {
                console.log(doc.id, " => ", doc.data().LastName);
                results.add(doc);
            }
        });
    });
}