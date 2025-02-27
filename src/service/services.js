import { useState, useEffect } from "react";

function getProds(type) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false
        async function fetchData() {
            try {
                const res = await fetch(`https://server-smaki.vercel.app/api/${type}`)
                // const res = await fetch(`https://server-8q35.onrender.com/api/${type}`)
                if (!ignore) {
                    const data = await res.json()
                    setProducts(data)
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData()

        return () => { ignore = true }

    }, [type])

    return { products, loading };
}

export { getProds }