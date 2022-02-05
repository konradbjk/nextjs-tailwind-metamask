import ConnectWallet from "@/components/ConnectWallet";
import Contracts from "@/components/Contracts";
import Head from "next/head";


export default function Home() {
return(
    <div className="container px-2 mx-auto">
        <Head>
        <title>Implementing Metamask with Next.js</title>
        <meta
          name="description"
          content="Project showcasing how to integrate web3 with next.js and tailwind project"
        />
        </Head>
        <main>
            <ConnectWallet/>
            {/* <Contracts/> */}
        </main>
        </div>
)
}
