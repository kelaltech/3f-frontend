export type State = {
  readonly account?: any | null
}

const accountStringFromStorage = window.localStorage.getItem('account')
export const initialState: State = {
  account: accountStringFromStorage ? JSON.parse(accountStringFromStorage) : undefined
}

export type Action =
	| { readonly type: 'set'; readonly account: any }
	| { readonly type: 'unset' }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
	case 'set':
	  return { ...state, account: action.account }
	case 'unset':
	  return { ...state, account: null }
	default:
	  throw Error('Unexpected action')
  }
}
