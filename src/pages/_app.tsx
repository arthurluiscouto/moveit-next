import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownContext, CountdownProvider } from '../contexts/CountDownContext'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
        <Component {...pageProps} />
   </ChallengesProvider>
  )
}

export default MyApp
