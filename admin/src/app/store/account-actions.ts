import Axios from 'axios'
import { Action } from './account-reducer'


export function reloadAccount(
	accountDispatch: (action: Action) => void,
	silentFail = false,
	account?: any,//has to an interface
	onReload?: () => void,
	onError?: (e: any) => void
): void {


  console.log('This is from Account:', account);
  const reload = async (account?:any): Promise<void> => {
	if (!account) throw Error('Account not found.');
	if (!account._id) throw Error('Received account data is malformed.');

	window.localStorage.setItem('account', JSON.stringify(account));
	accountDispatch({ type: 'set', account });

	if (onReload) onReload();
  };

  if (account) {
	reload(account).catch(e => {
	  if (!silentFail && onError) onError(e)
	})
  } else {
	Axios.get('/api/account/me', { withCredentials: true })
		.then((response:any) => reload(response.data))
		.catch((e:any) => {
		  const isLoggedOutErrorType = e === 'Unauthorized'

		  if (isLoggedOutErrorType) accountDispatch({ type: 'unset' })
		  if (!silentFail && onError && !isLoggedOutErrorType) onError(e)
		})
  }
}



export function login(
	accountDispatch: (action: Action) => void,
	data: { email: string; password: string },
	onLogin?: () => void,
	onError?: (e: any) => void
): void {
  Axios.post<void>('/api/account/login', data)
	  .then((response:any) => {
		const responseUrl: string = response.request.responseURL.toLowerCase()
		if (
			responseUrl.includes('success=false') &&
			responseUrl.includes('code=wrong_credentials')
		) {
		  if (onError) onError(new Error('WRONG_CREDENTIALS'))
		} else {
		  // success
		  reloadAccount(
			  accountDispatch,
			  undefined,
			  undefined,
			  () => {
				if (onLogin) onLogin()
			  },
			  onError
		  )
		}
	  })
	  .catch((e:any) => {
		if (onError) onError(e)
	  })
}

export function logout(
	accountDispatch: (action: Action) => void,
	onLogout?: () => void,
	onError?: (e: any) => void
): void {
  clearAllCachedPrivateData()

  Axios.post<void>('/api/account/logout')
	  .then(() => {
		clearAllCachedPrivateData()
		accountDispatch({ type: 'unset' });

		if (onLogout) onLogout()
	  })
	  .catch((e:any) => {
		if (onError) onError(e)
	  })
}

export function clearAllCachedPrivateData() {
  const keys = [
	// all
	'account',
	'login'
  ];

  for (const key of keys) window.localStorage.removeItem(key)
}
