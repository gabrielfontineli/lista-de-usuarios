import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthGuard = (props: PropsWithChildren) => {
	const { isAuthenticated, isLoading } = useAuth()
	const navigate = useNavigate()

	if (!isAuthenticated) {
		isLoading ? console.log('Loading...') : navigate('/')
	}

	return (
		<>
			{props.children}
		</>
	)
}