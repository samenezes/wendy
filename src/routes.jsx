import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Header>
                <Container>
                <Footer>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                </Route>
                </Footer>
                </Container>
                </Header>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
