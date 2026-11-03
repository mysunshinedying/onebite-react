import React, {useRef} from 'react';
import './Editor.css';

const Editor = ({onCreate}) => {
    const [content, setContent] = React.useState('');
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(content.trim().length === 0) {
            alert('할 일을 입력해주세요.')
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    const onKeyDown = (e) => {
        e.key === 'Enter' && onSubmit();
    }

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                onKeyDown={onKeyDown}
                type="text"
                value={content}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."/>
            <button onClick={onSubmit} type="button">추가</button>
        </div>
    );
};

export default Editor;
