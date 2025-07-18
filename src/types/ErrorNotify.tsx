import React from 'react';
import NotifyManager from "../NotifyManager";
import BaseNotifyProps from "./BaseNotifyProps";
import useRendered from "./hooks/useRendered";
import getNotifyStyle from "./getNotifyStyle";
import {NotifyItem} from "../styles";
import {Content} from './styles';
import closeIcon from '../images/close.svg';

export const ErrorNotify: React.FC<BaseNotifyProps> = ({
                                                           id,
                                                           text,
                                                           onClick,
                                                           needRemove,
                                                       }) => {
    const rendered = useRendered();
    const style = getNotifyStyle(rendered, needRemove);

    return (
        <NotifyItem
            style={{
                ...style,
                ...{
                    backgroundColor: '#EF5E70',
                    color: '#fff'
                }
            }} onClick={onClick}>
            <Content>
                <div className="text">{text}</div>
                <img
                    src={closeIcon as string}
                    className={'close'}
                    alt={'Close'}
                    onClick={() => NotifyManager.delete(id)}/>
            </Content>
        </NotifyItem>
    );
};