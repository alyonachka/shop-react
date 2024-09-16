import { useEffect, useRef, useState } from "react"

export const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebaunceValue] = useState("");

    const timerRef = useRef()

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebaunceValue(value), delay)

        return () => clearTimeout(timerRef.current)
    }, [value, delay])

    return debounceValue
}