import {render, fireEvent} from '@testing-library/react';
import { FormInput } from './FormInput';
import {ThemeProvider} from 'styled-components';


const stubtheme = {
    variables:{
        fontWeights:{
            bold: 700
        }
    },
    input: {
        borderColor: '#fff'
    }
}

describe('<FormInput/>', () => {
    it('should change value', ()=>{
        const { debug, getByTestId } = render(
            <ThemeProvider theme={stubtheme}>
                <FormInput label="email" />
            </ThemeProvider>
        );

        // debug();
        const input = getByTestId('test-input');
        // debug(input);

        expect(input.value).toBe('');

        fireEvent.change(input, { target: { value: 'test@test.com' } });

        // debug(input);
        expect(input.value).toBe('test@test.com');
        
    });

   
});
