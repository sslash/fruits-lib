import {reorderVertices} from '../reorderService';
import Vertice from '../../models/Vertice';
import {List} from 'immutable';
import {expect} from 'chai';


describe('reorderVertices', () => {

    it('should reorder up from end', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(2, verts, 'up');
        expect(result).to.deep.equal([1337, 1339, 1338]);
    });

    it('should reorder up from middle', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(1, verts, 'up');
        expect(result).to.deep.equal([1338, 1337, 1339]);
    });

    it('should roll over up', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(0, verts, 'up');
        expect(result).to.deep.equal([1339, 1338, 1337]);
    });

    it('should roll over down', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(2, verts, 'down');
        expect(result).to.deep.equal([1339, 1338, 1337]);
    });

    it('should reorder down from middle', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(1, verts, 'down');
        expect(result).to.deep.equal([1337, 1339, 1338]);
    });

    it('should reorder down from top', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(0, verts, 'down');
        expect(result).to.deep.equal([1338, 1337, 1339]);
    });

    it('should tolerate verticeList not sorted', () => {

        const verts = List.of(
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 3, id: 1339})
        );

        const result = reorderVertices(1, verts, 'down');
        expect(result).to.deep.equal([1337, 1339, 1338]);
    });

    it('should throw on index out of bounds', () => {

        const verts = List.of(
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        );

        expect(() => {
            reorderVertices(3, verts, 'down');
        }).to.throw('Illegal reorder index');
    });
});
