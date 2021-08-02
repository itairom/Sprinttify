

import { useEffect, useState } from 'react'

export const useForm = (initialState, cb = () => { }) => {
  const [fields, setFields] = useState(initialState)
  useEffect(() => {
    cb(fields)
  }, [fields])

  return [
    fields,
    function (ev) {
      const field = ev.target.name
      const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
      setFields(prevFields => ({ ...prevFields, [field]: value }))
    },
    setFields
  ]
}

export const useRelativeMousePosition = () => {

  const [position, setPosition] = useState({x:0,y:0})

  // const setFromEvent = (ev) => setPosition({ x: ev.target.getBoundingClientRect(), Y: ev.clientY,})
  const setFromEvent = (ev) => setPosition({x:ev.clientX - ev.target.getBoundingClientRect().left, location:ev.path[0]?.attributes[0]?.value})
  useEffect(() => {
    window.addEventListener("click", setFromEvent)
    return () => {
      window.removeEventListener("click", setFromEvent)

    }
  }, [position])

  return position
}

// export const useFetch = (query) => {

//   const options = {
//     headers: {
//         'user-access-token': '1e6be782-0600-4b32-9674-5a4488ae6cd4',
//     }
// };
//   const [status, setStatus] = useState('idle');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//       if (!query) return;


//       const fetchData = async () => {
//         setStatus('fetching');
//         const response = await fetch(
//               `https://api.sprintt.co/crypto/currencies/${query}`,options);
//           const data = await response.json();
//           setData(data.hits);
//           setStatus('fetched');
//       };

//       fetchData();
//   }, [query]);

//   return { status, data };
// };

export const useFetch = (url) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  const options = {
    headers: {
        'user-access-token': '1e6be782-0600-4b32-9674-5a4488ae6cd4',
    }
};

  useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
          setStatus('fetching');
          const response = await fetch(url,options);
          const data = await response.json();
          setData(data);
          setStatus('fetched');
      };

      fetchData();
  }, [url]);

  return { status, data };
};
