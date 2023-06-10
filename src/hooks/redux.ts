import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../store/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector/* делает все тоже самое что useSelector но типизиурет и
 показует чо у нас в сторе вообще есть*/