import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import { About, Administration, Academics, Admissions, SchoolLife, News, Article, Gallery, Contact, NotFound } from './components/Pages'
import { school } from './data/site'
import './styles.css'
function PageTitle() {
 const { pathname } = useLocation()
 useEffect(() => { const titles: Record<string,string> = {'/':school.motto,'/about':'About Our School','/administration':'School Administration','/academics':'Academics','/programmes':'Programmes & Courses','/admissions':'Admissions','/school-life':'School Life','/news':'News & Events','/gallery':'Photo Gallery','/contact':'Contact Us'}; document.title = `${titles[pathname] ?? (pathname.startsWith('/news/') ? 'School Story' : 'Page Not Found')} | ${school.name}` },[pathname])
 return null
}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><PageTitle/><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="administration" element={<Administration/>}/><Route path="academics" element={<Academics/>}/><Route path="programmes" element={<Academics programmes/>}/><Route path="admissions" element={<Admissions/>}/><Route path="school-life" element={<SchoolLife/>}/><Route path="news" element={<News/>}/><Route path="news/:slug" element={<Article/>}/><Route path="gallery" element={<Gallery/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter></React.StrictMode>)
