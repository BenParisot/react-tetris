import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../utils/gameHelpers';

const Tetris = () => {


    return (
        <section>
            <Stage stage={createStage()} />
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
