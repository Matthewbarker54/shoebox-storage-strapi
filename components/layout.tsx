import Head from "next/head";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { IMenu } from "lib/types";

interface ILayout {
    general: IMenu;
    meta?: any;
    children: any;
}

const Layout = ({ general, meta, children } : ILayout) => {
    return (
        <div className="app_container">
            <Head>
                <title>{meta?.title ? meta.title : ""}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {meta?.tags.map((tag: {name: string; content: string;}, i: number) => (
                    <meta key={i} name={tag.name} content={tag.content} />
                ))}
            </Head>
            <Nav
                menu={general.nav}
            />
            <main>
                {children}
            </main>
            <Footer
                menu={general.footer}
            />
        </div>
    );
};

export default Layout;