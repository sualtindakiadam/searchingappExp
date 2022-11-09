import { useHistory, useLocation } from 'react-router-dom'


export const pushPage = (path) => {
    const history = useHistory()
    history.push(path)
}