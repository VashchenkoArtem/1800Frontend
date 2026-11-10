import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/baseApi";

interface RegisterFormValues {
    email: string;
    password: string;
}

export function RegisterForm() {
    const { register, handleSubmit } = useForm<RegisterFormValues>();
    const [ registerUser ] = useRegisterMutation()
    async function onSubmit(data: RegisterFormValues) {
        const result = await registerUser(data)
        alert(`Користувач ${result.data?.email} успішно зареєструвався`)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='email'
                placeholder='user@gmail.com'
                required
                {...register("email")}
            />
            <input
                type='password'
                placeholder='Ваш пароль'
                required
                {...register("password")}
            />
            <button type='submit'>Зареєструватися</button>
        </form>
    )
}