function gramophone(bandName :string, albumName :string, songName :string) {
    const time :number = (bandName.length * albumName.length * songName.length) / 2;
    const rotations :number = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')