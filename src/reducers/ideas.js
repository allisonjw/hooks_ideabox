export const ideas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IDEA': 
          return [...state, { id: Date.now(), idea: action.idea, completed: false }];
        case 'DELETE': 
          return [...state, { id: action.id, idea: action.idea, completed: false }];
        default:
          return state;
    }
}