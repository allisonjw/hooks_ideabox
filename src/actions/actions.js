export const addIdea = ideas => ({
    type: 'ADD_IDEA',
    id: ideas.id,
    title: ideas.title,
    description: ideas.description,
});

export const removeIdea = ideas => ({
    type: 'REMOVE',
    id: ideas.id
});