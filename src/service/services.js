import { useState, useEffect } from "react";

function getProds(type) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let ignore = false
        async function fetchData() {
            try {
                const res = await fetch(`https://server-8q35.onrender.com/api/${type}`)
                if (!ignore) {
                    const data = await res.json()
                    setProducts(data)
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData()

        return () => { ignore = true }
    }, [type])

    return products
}

export { getProds }