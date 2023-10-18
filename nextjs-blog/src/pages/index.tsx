import FirstPost from '@/pages/posts/first-post'
import Link from 'next/link'


export default function Home() {
    return (
        <>
            <div>
                <Link href="https://github.com/">github</Link>
            </div>
            <div>
                <Link href="/posts/first-post">hey</Link>
            </div>
        </>
    )
}
