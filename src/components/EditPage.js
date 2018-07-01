import React from 'react';

const EditPage = (props) => {
    console.log(props);
    return (
    <div>
        This is EditPage {props.match.params.id}
    </div>
    );
};

export default EditPage;