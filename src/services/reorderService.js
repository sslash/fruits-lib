import {immutableComparator} from '../fruitslib/utils';


function _swap (reordered, verticeIndex, i2) {
    const tmp = reordered[verticeIndex];
    reordered[verticeIndex] = reordered[i2];
    reordered[i2] = tmp;
    return reordered;
}

/**
* Takes a list of vertices, returns a list if vertice ids
* with the vertice at @sortIndex swapped with its adjacent
* top or below vertice
*
* @param {Number} verticeIndex index into reorderList
* @param {object} vertices Immutable js list of vertices
* @param {string} upOrDown move verticeIndex up or down
*
* @returns {Array} reordered list of verticeIds
*/
export function reorderVertices (verticeIndex, vertices, upOrDown) {
    if (verticeIndex > vertices.count() - 1) {
        throw new Error('Illegal reorder index');
    }

    const end = vertices.count() - 1;
    let swapIndex;

    // set index of who to swap with
    if (upOrDown === 'down') {
        swapIndex = verticeIndex === end ? 0 : verticeIndex + 1;
    } else {
        swapIndex = verticeIndex === 0 ? end : verticeIndex - 1;
    }

    let reordered = vertices
    .sort(immutableComparator('sortorder'))
    .map(i => i.get('id'));

    return _swap(reordered.toJSON(), verticeIndex, swapIndex);
}
