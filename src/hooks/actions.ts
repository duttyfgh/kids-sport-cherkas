import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { banerPonelAction } from '../store/actualNewsSlice'

const actions = {
    ...banerPonelAction,
    //тут би билоби еще подобние конструкции но у нас только 1 слайс githubAction из файла github.slice.ts
}

export const useActions = () => {
    const dispatch = useDispatch()// получаем обьект диспатч
    return bindActionCreators(actions, dispatch)// передаем все actions на проєкте и байндим их на dispatch
}