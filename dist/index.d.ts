import { PureComponent } from 'react';
interface ObserverComponentProps<D> {
    data: D;
}
declare type ObserverComponent<D, P = {}> = PureComponent<ObserverComponentProps<D> & P>;
export { ObserverComponent };
