import React, { useState, useEffect } from 'react';
import Row from './row';

const Hook = () => {
    const name = useFormFields('Rafiq');
    const lastName = useFormFields('Jamakhane')
    const innerWidth = useWindowWidth();
    useDocumentTitle(name + ' ' + lastName);



    return (
        <div>
            <Row>
                <input type="text" {...name}/>
            </Row>
            <Row>
            <input type="text" {...lastName}/>
            </Row>
            <Row>
                {innerWidth}
            </Row>
        </div>
    )
};

function useFormFields(initalValue){
    const [value, setValue] = useState(initalValue);
    function handleChange(e){
        setValue(e.target.value)
    }

    return {
        name : [value],
        value : value,
        onChange : handleChange
    }
}

function useWindowWidth() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(
        () => {
            const handleResize = () => setInnerWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            }

        }
    );

    return innerWidth;
}

function useDocumentTitle(title) {
    useEffect(
        () => {
            document.title = title;
        }
    );
}

export default Hook;