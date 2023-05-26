import { WINNER_COMBOS } from "../constants"

export const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
        const first = combo[0]
        const second = combo[1]
        const third = combo[2]

        if ( (board[first] !== null) && 
            (board[first] === board[second]) && 
            (board[first] === board[third])
        ) return board[first]
    }
    return null
}