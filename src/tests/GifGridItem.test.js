import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {

    let wrapper = shallow( <GifGridItem/>);
    beforeEach( ()=>{

        wrapper = shallow(<GifGridItem/>);
    })

    test('debe mostrar el componente correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})

