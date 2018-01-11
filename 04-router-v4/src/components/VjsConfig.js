export const getOptions = src => ({
    controls: true,
    fluid: true,
    playbackRates: [0.75, 1, 1.5, 2],
    sources: [
        {
            src,
            type: 'video/mp4'
        }
    ]
})