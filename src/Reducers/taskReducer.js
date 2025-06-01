const initState = {
  tasks: [
{
    id: 0,
    text: 'Complete your task tracker project',
    completed: false
  },
  {
    id: 1,
    text: 'Revise Redux concepts',
    completed: false
  },
  {
    id: 2,
    text: 'Start Node.js after this project',
    completed: false
  }
],
};

const tasks = (state = initState, action) => {
    switch (action.type) {
      
      case 'ADD NEW TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.task]
        }
      case 'DELETE TASK':
        console.log(action.taskId)
        return {...state, tasks: state.tasks.filter(task => task.id != action.taskId)};
      case 'UPDATE TASK':
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === action.taskId) {
              return {
                ...task,
                completed: !task.completed
              };
            }
            return task;
          })
        }
      default:
      return state;
  };
};

export default tasks;