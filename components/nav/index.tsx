import React from "react";
import Link from "next/link";
import style from "./nav.module.css";
import { urlForImage } from "@/lib/query";
import Image from "next/image";

const Nav = ({ menu }: any) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className={style.navigation}>
            <div className={style.content}>
                {menu?.logo?.asset?._ref ?
                <Link href="/" className={style.logo}>
                    <Image width={500} height={500} src={urlForImage(menu.logo.asset._ref).url()} alt={menu.logo.alt ? menu.logo.alt : 'Logo'} />
                </Link>
                : null }
                <ul className={style.web_links}>
                    {menu?.menuLink?.length > 0 && menu.menuLink.map(
                        ({ title, slug }: any, i: number) => (
                            <li key={i}>
                                <Link href="/[slug]" as={`/${slug?.current}`} className={`${style.nav_link}`}>
                                    {title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                <div
                className={`${style.mobile_nav} ${isOpen ? style.mobile_nav_open : ""
                    }`}
                >
                <button className={`hamburger hamburger--emphatic ${isOpen ? "is-active" : ""}`} type="button" onClick={() => setIsOpen((cur) => !cur)} tabIndex={1}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <button
                    className={style.mobile_nav_close}
                    onClick={() => setIsOpen((cur) => !cur)}
                    aria-label="close menu"
                    tabIndex={-1}
                ></button>
                <ul className={style.mobile_nav_links}>
                    {menu?.menuLink?.length > 0 && menu.menuLink.map(
                        ({ title, slug }: any, i:number) => (
                            <li key={i}>
                                <Link href="/[slug]" as={`/${slug?.current}`} className={`${style.nav_link}`}>
                                    {title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
        </nav>
    )
}
export default Nav;