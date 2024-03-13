let randomAtts = [
    ' face ',
    ' ability ',
    ' character '
]
let randomAdjs = [
    ' beatiful.',
    ' marvelous.',
    ' lovely.'
]
let randomEncs = [
    ' You are beloved!',
    ' You can do this!',
    ' Keep going!'
]
let randomAtt = randomAtts[Math.floor(Math.random()*3)];
let randomAdj = randomAdjs[Math.floor(Math.random()*3)];
let randomEnc = randomEncs[Math.floor(Math.random()*randomEncs.length)];
let randomComp = ['Your', randomAtt, 'is', randomAdj, randomEnc].join(" ")



