import { useFetch, useCounter } from "../hooks";
import { Loading, Quote } from "../03-examples";


export const Layout = () => {
    const { counter, increment } = useCounter ( 1 );

    const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad quotes</h1>
            <hr />

            {
                loading
                    ?(
                    
                        <Loading />
                    )
                    :(
                        <Quote author={author} quote={quote} />
                    )
            }

            <button className="btn btn-primary" onClick={() => increment()} disabled= {loading}>Next quote</button>
        </>
    )
}