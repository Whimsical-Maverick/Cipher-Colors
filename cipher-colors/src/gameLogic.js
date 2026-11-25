export function generateSecret(arr, count = 4)
{
    const shuffled = [...arr];

    // Fisher-Yates shuffle algorithm: O(n) time complexity
    for (let i = shuffled.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }

    return shuffled.slice(0, count);
}

export function evaluateGuess(secret, guess)
{
    let correctPosition = 0;
    let wrongPosition = 0;

    // Use a Set for O(1) membership lookups
    const secretSet = new Set(secret);

    for (let i = 0; i < guess.length; i++) 
    {
        if (guess[i] === secret[i]) 
        {
            correctPosition++;
        } 
        else if (secretSet.has(guess[i])) 
        {
            wrongPosition++;
        }
    }

    return {
        correctPosition,
        wrongPosition
    };
}
