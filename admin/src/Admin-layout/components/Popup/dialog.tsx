import React, {CSSProperties, PropsWithChildren, ReactNode, useEffect} from 'react'
import './dialog.scss'
import { Button, Block, Input, TextArea, Page, Card } from 'gerami';
import { useState } from 'react';
import picture from '../../../assets/testpic.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";

export interface IDialogProps  {
    style?: CSSProperties
    className?: string
    top?: boolean
    left?: boolean
    right?: boolean
    bottom?: boolean,
    children: ReactNode,
    open?:boolean,
    closeDialog: ()=>void
}
export default function Dialog(props: IDialogProps){

    const { bottom,className,left,right,style,open,top,children,closeDialog } = props;

    useEffect(()=>{
        let modal: any = document.getElementById('gerami-dialog-box');
        if (bottom) {
            modal.classList.add('anime-bottom')
        } else if (left) {
            modal.classList.add('anime-left')
        } else if (right) {
            modal.classList.add('anime-right')
        } else if (top) {
            modal.classList.add('anime-top')
        } else {
            modal.classList.remove('anime-right', 'anime-left', 'anime-top', 'anime-bottom')
        }
    },[])
    return(
        <>
            <div
                className="gerami-dialog-container"
                id={'gerami-dialog-container'}
                style={{ display: open ? 'block' : 'none' }}
            >
                <div
                    style={style}
                    id={'gerami-dialog-box'}
                    className={`gerami-dialog-box ${className ? className : ''}`}
                >
                    <div
                        className={'close-dialog'}
                        onClick={closeDialog}
                    >
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}