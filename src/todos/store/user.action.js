import {bindActionCreators} from "redux"
import {useDispatch} from "react-redux"
import {useMemo} from 'react'

export default function useActions(actions, deps) {
    const dispatch = useDispatch()
    return useMemo(
        ()=>{
            if (Array.isArray(actions)){ //action을 배열의 형태로 전달할 것이다.
                return actions.map(a=> bindActionCreators(a, dispatch)) //리듀서를 리턴한다.
            }
            return bindActionCreators(actions, dispatch) //리듀서를 리턴한다.
        }, deps ? [dispatch, ...deps] : deps //store는 객체고 기능과 속성의 집합이기 때문에 dispatch와 ...state 이게 있다
    )

}
//useMemo (()=>{생성함수},[의존성 값의 배열]))
//의존성 값이 변경되었을 때 생성함수를 실행한다
//return하는 생성함수는 메모이제이션된 값이다... 그러니까 메모리에서 기억하고 있어서 다시 재계산하지 않는다 -> 성능향상을 가져온다.