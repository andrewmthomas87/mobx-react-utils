import { PureComponent } from 'react'


interface ObserverComponentProps<D> {
	data: D
}

type ObserverComponent<D, P = {}> = PureComponent<ObserverComponentProps<D> & P>

export { ObserverComponent }
