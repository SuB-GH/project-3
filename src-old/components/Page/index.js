import React from 'react'
import About from '../About'
import Contact from '../Contact'
import Content from '../Content'
import Nav from '../Nav'

function Page({currentPage}) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'content page':
                return <Content />
            default:
                return <Search />                   
        }   
    }
    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}
export default Page