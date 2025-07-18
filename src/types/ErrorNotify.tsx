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
                <svg
                    className={'close'}
                    onClick={() => NotifyManager.delete(id)}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#EFF2F5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 13.7828L8.58508 17.3301C8.21986 17.7094 7.6144 17.7152 7.24204 17.3428C6.87955 16.9804 6.87399 16.3944 7.22952 16.0251L10.7742 12.343C10.7708 12.3302 10.7676 12.3174 10.7646 12.3044L7.22172 8.59327C6.86883 8.22362 6.8756 7.63984 7.23697 7.27847C7.61039 6.90506 8.21795 6.9121 8.58261 7.29408L12 10.8738L15.4174 7.29408C15.7821 6.9121 16.3897 6.90506 16.7631 7.27847C17.1244 7.63984 17.1312 8.22362 16.7783 8.59327L13.2354 12.3045C13.2325 12.3174 13.2293 12.3302 13.2258 12.343L16.7705 16.0251C17.126 16.3944 17.1205 16.9804 16.758 17.3428C16.3856 17.7152 15.7802 17.7094 15.415 17.3301L12 13.7828Z"
                          fill="#EF5E70"/>
                </svg>
            </Content>
        </NotifyItem>
    );
};