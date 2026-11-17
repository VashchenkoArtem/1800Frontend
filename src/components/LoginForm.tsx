import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/baseApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface LoginFormValues{
    email: string;
    password: string;
}
export function LoginForm(){
    const {
        register, 
        handleSubmit, 
        formState: {errors, isValid, isDirty},
        setError
    } = useForm<LoginFormValues>()
    const [ loginUser ] = useLoginMutation()
    async function onSubmit(data: LoginFormValues){
        try{
            await loginUser(data).unwrap()
        } catch(error){
            const apiError = error as FetchBaseQueryError
            let message = 'Не вдалося увійти. Спробуйте ще раз'

            if (apiError.status === 401){
                message = 'Неправильний email або пароль'
            }else if (
                apiError.status === 'FETCH_ERROR' || 
                apiError.status === 'TIMEOUT_ERROR'
            ){ 
                message = "Не вдалося з'єднатися із сервером"
            }
            setError('root', { message })
        }
    }
    return(
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <input 
                type='email'
                placeholder='user@gmail.com'
                required
                {...register('email',{
                    required: 'Введіть email',
                    maxLength: {
                        value: 100, 
                        message: 'Перевищено ліміт символів'
                    }
                })}
            />
            { errors.email && <p>{errors.email.message}</p> }
            <input
                type='password'
                placeholder='Ваш пароль'
                required
                {...register('password',{
                    required: 'Введіть пароль',})}
            />
            { errors.password && <p>{errors.password.message}</p> }
            <p>{ 
                isDirty 
                    ? "Форма заповнена"
                    : "Форма не заповнена"
            }</p>
            <p>{ !isDirty 
                ? "Заповніть форму" 
                : isValid ? "Поля пройшли перевірку" : "Перевірте дані"
                }</p>
            { 
                errors.root && 
                    <p>{errors.root.message}</p>
            }
            <button>Увійти</button>
        </form>
    )
}