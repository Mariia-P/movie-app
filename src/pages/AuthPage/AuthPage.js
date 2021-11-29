import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import { FormInput } from '../../components';
import { StyledButton } from '../../styles';
import { StyledFormContainer, StyledConteiner, StyledTitle } from './styles';
import { authenticateUser } from '../../store';


const { REACT_APP_AUTH_URL, REACT_APP_FIREBACE_API_KEY } = process.env;

const authSelector = state => !!state.auth.idToken;



export const AuthPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({ mode: 'onBlur' });
    console.log('[errors]', errors);
    const isAuthanticated = useSelector(authSelector);
    const dispatch = useDispatch();

    console.log('[isAuthanticated]', isAuthanticated);

    if(isAuthanticated) return <Redirect to="/"/>;

    const onSubmit = async values => {
        const user = {
            ...values,
            returnSecureToken: true
        };
        const url =
            REACT_APP_AUTH_URL +
            `signInWithPassword?key=${REACT_APP_FIREBACE_API_KEY}`;
       try{
           const {data: {idToken, localId}} = await axios.post(url, user);

           dispatch(authenticateUser(idToken, localId));
       } catch (e){
           console.log('[e]', e);
       }
   
    };
    const onError = error => console.log('[error]', error);
    return (
        <StyledConteiner>
            <StyledFormContainer>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <StyledTitle>Sign In</StyledTitle>
                    <fieldset>
                        <Controller
                            control={control}
                            name="email"
                            defaultValue=""
                            rules={{
                                pattern: {
                                    value: /^[a-zA-Z_\-0-9]+@[a-z]+\.[a-z]{2,3}$/,
                                    message: 'Invalid email addres'
                                }
                            }}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: {
                                    invalid,
                                    isTouched,
                                    isDirty,
                                    error
                                }
                            }) => (
                                <FormInput
                                    label="E-mail"
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                />
                            )}
                            // as={<FormInput label="E-mail" />}
                        />
                        <ErrorMessage errors={errors} name="email" />

                        <Controller
                            control={control}
                            name="password"
                            defaultValue=""
                            rules={{ required: 'Password is required', minLength: {
                                value: 6,
                                message: 'Password should be at least 6 characters'
                            } }}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: {
                                    invalid,
                                    isTouched,
                                    isDirty,
                                    error
                                }
                            }) => (
                                <FormInput
                                    label="Password"
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                />
                            )}
                            // as={<FormInput label="Password" />}
                        />
                        <ErrorMessage errors={errors} name="password" />
                    </fieldset>
                    <StyledButton type="submit" $secondary>
                        Submit
                    </StyledButton>
                </form>
            </StyledFormContainer>
        </StyledConteiner>
    );
};




