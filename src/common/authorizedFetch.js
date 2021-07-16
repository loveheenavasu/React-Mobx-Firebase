import firebase from "firebase";

export function firebaseGet(state) {
    let data;
    return new Promise((res) => {
        firebase
          .database()
          .ref(state)
          .on("value", function (snapshot) {
            data = snapshot.val();
            res(data);
          });
      });
  }
  export function firebaseInsert(state, data) {
     firebase.database().ref(state).push(data);
  }
  export function firebaseUpdate(state, data){
    let updateData;
    return new Promise((res) => {
        firebase
          .database()
          .ref(state)
          .update(data,  ()=>{
            updateData = data;
            res(updateData);
          });
      });
    
  }