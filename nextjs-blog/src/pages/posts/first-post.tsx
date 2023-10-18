import Link from "next/link"

export const FirstPost=():JSX.Element => {
    return (
        <>
            <h1>first port</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
        
        )
}

export default FirstPost