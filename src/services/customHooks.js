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
  const setFromEvent = (ev) => setPosition({x:ev.clientX - ev.target.getBoundingClientRect().left, location:ev.path[0].attributes[0].value})
  useEffect(() => {
    window.addEventListener("click", setFromEvent)
    return () => {
      window.removeEventListener("click", setFromEvent)

    }
  }, [position])

  return position
}

