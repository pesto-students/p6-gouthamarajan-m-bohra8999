import React from 'react';
import './ResultBox.css';

const ResultBox = ({ data, onCopy }) => {
  // data = [
  //   {
  //     full_short_link: 'full_short_linkfull_short_linkfull_short_link',
  //     original_link: 'original_linkoriginal_linkoriginal_linkoriginal_linkoriginal_link',
  //     code: 'asdw2133erf',
  //   },
  //   {
  //     full_short_link: 'full_short_link',
  //     original_link: 'original_link',
  //     code: 'asdw213hjns',
  //   },
  //   {
  //     full_short_link: 'full_short_link',
  //     original_link: 'original_link',
  //     code: 'asdw21[;ol]',
  //   },
  // ];

  const handleCopy = (e, text) => {
    navigator.clipboard.writeText(text);
    console.log(e.target.textContent);
    e.target.textContent = 'copied!';
    setTimeout(() => {
      e.target.textContent = 'copy';
    }, 1000);
  };

  return data.length ? (
    <div className='result-box'>
      {data.map((link, i) => {
        return (
          <div key={link.code} className='item'>
            <div className='link' title={link.original_link}>
              {link.original_link}
            </div>
            <div className='link' title={link.full_short_link}>
              {link.full_short_link}
            </div>
            <div>
              <button className='copy-button' onClick={(e) => handleCopy(e, link.full_short_link)}>
                Copy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default ResultBox;
