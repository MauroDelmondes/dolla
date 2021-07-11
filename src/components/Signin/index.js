import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
}   from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        dolla
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>

                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput type='email' required></FormInput>

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required></FormInput>

                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot passord</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
