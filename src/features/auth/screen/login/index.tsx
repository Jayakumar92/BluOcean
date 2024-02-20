import { useForm } from "react-hook-form"
import { useLogin } from '@/services/hooks'
import { useRedux } from '@/hooks'
import { saveToken, setIsAuthenticated } from "@/redux/app";

function Login() {

    const { dispatch } = useRedux();

    const { register, handleSubmit, } = useForm({
        defaultValues: {
            email: "akash.r@leorainfotech.in",
            password: "akash@6059",
        },
    })

    const { mutate } = useLogin({
        onSuccess,
        onError
    });

    function onSuccess(response: any) {
        const { token } = response
        dispatch(saveToken(token))
    }

    function onError(error: any) {
        console.log(JSON.stringify(error));
    }

    const onSubmit = (params: any) => {
        // addTodo(params)
        dispatch(saveToken("token"))
        dispatch(setIsAuthenticated(true))

    }

    return (
        <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                {...register("email")}
                                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type={'password'}
                                {...register("password")}
                                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register now
                    </a>
                </p>
            </div>
        </div>
    )
}

export { Login } 