export const selectAllPositions = state => state.positions;


export const VisiblePositions = (state , filters = []) => {
    if(state.length === 0 ) return state.postions;

    return filters.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filters.every(filter => posFilters.includes(filter))
    })
}