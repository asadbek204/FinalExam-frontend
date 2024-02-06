import React from 'react';

type Properties = {
  style: React.CSSProperties
}


function BtnNewStories(props: Properties): React.JSX.Element {
  return (
    <div {...props}></div>
  );
}

export default BtnNewStories;