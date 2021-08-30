import React from 'react';
import Style from'./Box.module.css';
import cn from 'classnames';

export default function Button({size}) {
    const isBig = size === 'big';
    return <button className={cn(Style.button, {
            [Style.big]: isBig, 
            [Style.small]: !isBig})}>
            {isBig ? '큰 박스' : '작은 박스'}
            </button>
    // if (size === 'big') {
    //     // return <button className={`${Style.box} ${Style.big}`}>큰 박스</button>;
    //     return <button className={cn(Style.box, Style.big)}>큰 박스</button>;
    // } else {
    //     return <button className={`${Style.box} ${Style.small}`}>작은 박스</button>;
    // }
}