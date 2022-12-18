import React, { useRef, useState } from 'react';
import InputBox from './input-box';
import axios from 'axios';
import './Shortner.css';
import ResultBox from './result-box';
import throttle from 'lodash.throttle';
import ERROR_CODES from './error_codes';

const Shortner = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (userInput) => {
    if (!userInput) return;
    setIsLoading(true);
    try {
      const {
        data: { result },
      } = await axios(`https://api.shrtco.de/v2/shorten?url=${userInput}`);
      let { original_link, full_short_link, code } = result;
      setShortenedLinks((prev) => [...prev, { original_link, full_short_link, code }]);
      setError('');
    } catch (e) {
      setError(ERROR_CODES[e.response?.data?.error_code] || 'Unknown Error Occured!');
      console.error(e.response.data.error_code);
    }
    setIsLoading(false);
  };

  const fetchDataThrottled = useRef(throttle(fetchData, 1000));

  return (
    <section className='shortner-container'>
      <InputBox errorMessage={error} onClick={fetchDataThrottled.current} />
      <ResultBox data={shortenedLinks} />
    </section>
  );
};

export default Shortner;
