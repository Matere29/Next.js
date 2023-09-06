import React from 'react'
import classes from './main-header.module.css'
import Link from 'next/link'
export default function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
<ul>
    <li>
        <Link href="">Browse All Events</Link>
    </li>
</ul>
            </nav>
        </header>
    )

}
