// export const initSpacePause = player => {
//     const playerEL = player.el()
//     player.on('play', () => {
//         playerEl.focus()
//         playerEl.onkeydown = event => {
//             if (event.code === 'Space') {
//                 event.preventDefault()
//                 if (!player.paused()) {
//                     player.pause()
//                 } else {
//                     player.play()
//                 }
//             }
//         }
//     })
// }

export const initSpacePause = player => {
    const playerEl = player.el()
    player.on('play', () => {
        playerEl.focus()
        playerEl.onkeydown = event => {
            if (event.code === 'Space') {
                event.preventDefault()
                if (!player.paused()) {
                    player.pause()
                } else {
                    player.play()
                }
            }
        }
    })
}