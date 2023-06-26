import Head from "next/head";


export default function Header() {
    return (
        <>
            <Head>
                <title>National Park Finder</title>
                <meta name="description" content="Discover National Park sites to visit" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/mountain.png" />
            </Head>
        </>
    )
}