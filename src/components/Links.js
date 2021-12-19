import React from "react";

function Links( { github, linkedin }) {
    console.log(github, linkedin);
    return (
    <div>
      <h3>Links</h3>
      <a id="github" href={github}>{github}</a>
      <a id="linkedin" href={linkedin}>{linkedin}</a>
    </div>
    );
  }

export default Links;