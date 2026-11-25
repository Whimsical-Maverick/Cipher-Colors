import {MAX_ATTEMPTS} from "../constants"
export default function GameHeader({attempt})
{
    return (<header className="gameheader">
        <h1>Cipher Colors</h1>
        <p>Crack the 4-colour code</p>
        <p>Attempt : {attempt}/{MAX_ATTEMPTS}</p>
    </header>)
}