import React, { useEffect, useState } from 'react'
import * as S from '../components/style'
import { useNavigate } from 'react-router-dom'
import { registration } from '../api'


function Registration() {
    const [user, setUser] = useState({ email: '', password: '', username: '' })
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [repeatPassword, setRepeatPassword] = useState('')
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Необходимо ввести email')
    const [isFormValid, setIsFormValid] = useState(false)
    const [passwordError, setPasswordError] = useState(
        'Необходимо ввести пароль'
    )
    const [repeatPasswordError, setRepeatPasswordError] = useState(
        'Необходимо ввести пароль еще раз'
    )
    const blurHandler = (e) => {
        switch (e.target.name) {
          case 'email':
            setEmailDirty(true);
            break;
          case 'password':
            setPasswordDirty(true);
            break;
          case 'repeatPassword':
            setRepeatPasswordDirty(true);
            break;
          default:
            // Обработка случаев, когда значение не совпадает с ни одним из указанных выше
            break;
        }
      }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        setEmailError('')
        var EMAIL_REGEXP = new RegExp(
            '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$',
            'i'
        )
        if (!EMAIL_REGEXP.test(e.target.value)) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (!e.target.value.length) {
            setPasswordError('Необходимо ввести пароль')
            return
        }
        if (e.target.value.length < 8) {
            setPasswordError('Пароль должен содержать хотя бы 8 символов')
            return
        }
        if (e.target.value.search(/[a-z]/i) < 0) {
            setPasswordError('Пароль должен содержать хотя бы 1 букву')
            return
        }
        if (e.target.value.search(/[0-9]/) < 0) {
            setPasswordError('Пароль должен содержать хотя бы 1 цифру')
            return
        }
        setPasswordError('')
    }
    const passwordRepeatHandler = (e) => {
        setRepeatPassword(e.target.value)
        if (e.target.value !== password) {
            setRepeatPasswordError('Пароли не совпадают')
            return
        }
        if (!e.target.value.length) {
            setPasswordError('Необходимо ввести пароль еще раз')
            return
        }
        setRepeatPasswordError('')
    }

    useEffect(() => {
        if (emailError || passwordError || repeatPasswordError) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
            setUser({ email: email, password: password, username: email })
        }
    }, [emailError, passwordError, repeatPasswordError,email,password])
    const navigate = useNavigate()
    const regUser = () => {
        registration(user).then(() => {
            navigate('/login')
        })
    }
    return (
        <S.Wrapper>
            <S.Container>
                <S.Login>
                    <S.LoginModal>
                        <S.NavLogo>
                            <S.LogoImg src="/img/login-reg.png" alt="logo" />
                        </S.NavLogo>
                        {emailDirty && emailError ? (
                            <S.InputError>{emailError}</S.InputError>
                        ) : null}
                        <S.LoginInput
                            placeholder="Логин"
                            name="email"
                            value={email}
                            onChange={(e) => emailHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                        />
                        {passwordDirty && passwordError ? (
                            <S.InputError>{passwordError}</S.InputError>
                        ) : null}
                        <S.LoginInput
                            placeholder="Пароль"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => passwordHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                        />
                        {repeatPasswordDirty && repeatPasswordError ? (
                            <S.InputError>{repeatPasswordError}</S.InputError>
                        ) : null}
                        <S.LoginInput
                            value={repeatPassword}
                            onChange={(e) => passwordRepeatHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                            type="password"
                            name="repeatPassword"
                            placeholder="Повторите пароль"
                        />
                        <S.LoginButton
                            onClick={regUser}
                            $purple
                            disabled={!isFormValid}
                        >
                            Зарегистрироваться
                        </S.LoginButton>
                    </S.LoginModal>
                </S.Login>
            </S.Container>
        </S.Wrapper>
    )
}

export default Registration