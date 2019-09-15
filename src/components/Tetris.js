import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {


    return (
        <section>
            <Stage />
            <aside>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
                <StartButton />
            </aside>
        </section>
    )
}

export default Tetris;
