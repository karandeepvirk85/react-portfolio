import React from "react";

const DownLoadDocument = (documentUrl,e) =>{
    e.preventDefault();
    window.open(documentUrl);
}

export{
    DownLoadDocument
}