import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){

    const formatUsername = (username) => `@${username}`

    return (
        <section className='App'>
        <TwitterFollowCard formatUsername={formatUsername} username="vicedoooo" name="Alejandro Vicedo" />
        <TwitterFollowCard formatUsername={formatUsername} username="eliasantos_" name="Elia Santos" />
        </section>
    )
}