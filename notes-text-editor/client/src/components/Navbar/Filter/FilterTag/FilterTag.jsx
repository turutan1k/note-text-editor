import { CloseOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AppContext } from '../../../../App';
import s from './FilterTag.module.scss';

export default function FilterTag({ value }) {
    const { deleteTag } = useContext(AppContext);

    const onHandleTagDelete = () => {
        deleteTag(value);
    };
    return (
        <div className={s.filterTag}>
            <h3 className={s.filterTagText}>{value}</h3>
            <CloseOutlined
                className={s.deleteTag}
                onClick={onHandleTagDelete}
                style={{ fontSize: '10px' }}
            />
        </div>
    );
}
