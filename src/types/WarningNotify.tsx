import React from 'react';
import NotifyManager from "../NotifyManager";
import BaseNotifyProps from "./BaseNotifyProps";
import useRendered from "./hooks/useRendered";
import getNotifyStyle from "./getNotifyStyle";
import {NotifyItem} from "../styles";
//@ts-ignore
import {ReactComponent as CloseInfo} from '../images/ic_close_info.svg';
import {Content} from './styles';

export const WarningNotify: React.FC<BaseNotifyProps> = ({
                                                             id,
                                                             text = '',
                                                             onClick = () => {},
                                                             needRemove = false,
                                                         }) => {
    const rendered = useRendered();
    const style = getNotifyStyle(rendered, needRemove);

    return (
        <NotifyItem
            style={style}
            onClick={onClick}
        >
            <Content>
                <svg className="close" onClick={() => NotifyManager.delete(id)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#EFF2F5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.7828L8.5851 17.3301C8.21988 17.7094 7.61442 17.7152 7.24206 17.3428C6.87958 16.9803 6.87401 16.3944 7.22954 16.0251L10.7742 12.343C10.7708 12.3302 10.7676 12.3174 10.7647 12.3044L7.22172 8.59326C6.86882 8.22361 6.87559 7.63983 7.23696 7.27846C7.61038 6.90505 8.21795 6.91209 8.58261 7.29407L12 10.8738L15.4174 7.29407C15.7821 6.91209 16.3897 6.90505 16.7631 7.27846C17.1244 7.63983 17.1312 8.22361 16.7783 8.59326L13.2354 12.3044C13.2325 12.3173 13.2293 12.3302 13.2258 12.343L16.7705 16.0251C17.1261 16.3944 17.1205 16.9803 16.758 17.3428C16.3856 17.7152 15.7802 17.7094 15.415 17.3301L12 13.7828Z" fill="#4378FF"/>
                </svg>
                <div className="text">{text}</div>
            </Content>
        </NotifyItem>
    );
};