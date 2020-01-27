export const ideas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IDEA': 
          return [...state, { id: action.id, title: action.title, description: action.description }];
        case 'DELETE': 
        console.log(action.ideas.id)
          return state.filter(ideas => ideas.id !== action.id);
        default:
          return state;
    }
}