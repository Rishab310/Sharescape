export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    })
  }
}
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    }).catch((err) => {})
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      console.log('newuser');
      console.log(newUser);
      return firestore.collection('users').doc(res.user.uid).set({
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        initials: newUser.firstname[0] + newUser.lastname[0]
      })
    }).then(() => {
      firestore.collection('notifications').add({
        content: 'Joined the party!!',
        user: `${newUser.firstname} ${newUser.lastname}`,
        time: new Date()
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err})
    })
  }
}