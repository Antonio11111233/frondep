'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { JSX, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'
import Particle from '../components/Particle'
import React from 'react'
import '../globals.scss'



export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Верный логин!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}
	
	// let text = 'qwertyu';
	// let output = '';
	// let currentIndex = 0;
	
	// let intervalID = setInterval(() => {
	// 	output += text[currentIndex];
	// 	currentIndex += 1;
	// 	console.log(output);
	// 	if (currentIndex === text.length) {
	// 		clearInterval(intervalID)
	// 	};
	// }, 1000)
<div className='Scrambl'>
	
</div>
	return (
		<div className='flex min-h-screen'>
		
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout z-[3]'
				onSubmit={handleSubmit(onSubmit)}
			>
				
				<Heading title='Авторизация/Регистрация' />

				<Field
					id='email'
					label='Почта:'
					placeholder='Ведите почту:'
					type='email'
					extra='mb-4'
					{...register('email', {
						required: 'Email is required!'
					})}
				/>

				<Field
					id='password'
					label='Пароль: '
					placeholder='Введите пароль: '
					type='password'
					{...register('password', {
						required: 'Password is required!'
					})}
					extra='mb-6 '
				/>

				<div className='flex items-center gap-5 justify-center'>
					<Button onClick={() => setIsLoginForm(true)}>Войти</Button>
					<Button onClick={() => setIsLoginForm(false)}>Регистрация</Button>
				</div>
			</form>
			
			<div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
			<span className='Example__blinker'>_</span>Перезагрузите, если нет ответа
        <Particle/>
		
		
      </div>
		</div>
		
	)
}



