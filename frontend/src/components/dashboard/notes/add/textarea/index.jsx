import useAutoSizeTextarea from '../../../../../hooks/autoSizeTextarea';

const AutosizeTextarea = () => {
    const textareaRef = useAutoSizeTextarea();

    return (
        <>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="titleInput"
            />

            <textarea
                ref={textareaRef} 
                className="bodyInput"
                style={{ resize: 'none', overflow: 'hidden' }}
                rows={1}
                placeholder="Take a note..."
            />
        </>
    );
};

export default AutosizeTextarea;
