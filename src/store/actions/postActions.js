export const createPost = (post) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstname,
      authorLastName: profile.lastname,
      authorId: uid,
      createdAt: new Date()
    }).then(() => {
      firestore.collection('notifications').add({
        content: 'Added a new post!!',
        user: `${profile.firstname} ${profile.lastname}`,
        time: new Date()
      })
    }).then(() => {
      dispatch({ type: 'CREATE_POST', post});
    }).catch((err) => {
      dispatch({ type: 'CREATE_POST_ERROR', err });
    })
  }
}