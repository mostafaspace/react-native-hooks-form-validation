
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
    Container,
    Button,
    Header,
    Icon,
    Item,
    Input,
    Left,
    Body, Title, Right, Content
} from "native-base";

import userFormValidation from './src/useFormValidation'
import validateAuth from './src/validateAuth'

const INIT_STATE = {
    username: "",
    password: ""
}

export default function App() {
    const {handleChange, handleSubmit, isSubmitting, errors, values} = userFormValidation(INIT_STATE, validateAuth);

    return (
        <Container style={styles.container}>
            <Header rounded style={styles.header}>
                <Left>
                    <Button transparent onPress={() => console.log('open') }>
                        <Icon active name="ios-menu" />
                    </Button>
                </Left>
                <Body>
                <Title>RN Hooks Form Validation</Title>
                </Body>
                <Right />
            </Header>
            <Content style={{ padding: 16 }}>

                <Item error={errors.username && true}>
                    <Input placeholder={'Username'} name={'username'} value={values.username} onChangeText={(value) =>handleChange('username', value)} />
                </Item>
                {errors.username && <Text>{errors.username}</Text>}

                <Item error={errors.password && true} last>
                    <Input placeholder={'Password'} secureTextEntry value={values.password} name={'password'} onChangeText={(value) => handleChange('password', value)}/>
                </Item>
                {errors.password && <Text>{errors.password}</Text>}

                <Button block style={{ marginTop: 16 }} onPress={handleSubmit} disabled={isSubmitting}>
                    <Text>Sign In</Text>
                </Button>

            </Content>
        </Container>
    );

}

const styles = StyleSheet.create({

});
