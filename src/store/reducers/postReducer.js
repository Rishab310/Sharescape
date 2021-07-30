const initState = {
  posts: [
    {id: '1',title: "Post name 1",content: "blah blah blah"},
    {id: '2',title: "Post name 2",content: "blah blah blah"},
    {id: '3',title: "Post name 3",content: "blah blah blah"}
  ]
}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST': {
      console.log("Created post",action.post);
    }
  }
  return state;
}

export default postReducer;