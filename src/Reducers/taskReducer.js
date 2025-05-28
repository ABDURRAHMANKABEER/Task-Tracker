const initState = [
{
    id: 1,
    text: 'Complete your task tracker project',
    completed: false
  },
  {
    id: 2,
    text: 'Revise Redux concepts',
    completed: true
  },
  {
    id: 3,
    text: 'Start Node.js after this project',
    completed: false
  }
];

const tasks = (state = initState, action) => {
    switch (action.type) {
    
        default:
        return state;
  }
}

export default tasks;