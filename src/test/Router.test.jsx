import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// import { waitFor } from "@testing-library/react";
import Router from "../components/Router";
import Route from "../components/Route";
import Link from "../components/Link";
import {getCurrentPath} from '../utils/utils'

vi.mock('../utils/utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router',() => {
    beforeEach(()=>{
        cleanup()
        vi.clearAllMocks()
    })
    it('Should render without problems',() => {
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })

    it('Should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={()=><h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('Should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]

        render(<Router routes={routes}/>)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('Should navigate using Links', async () => {
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route path='/' Component={() => {
                    return (
                        <>
                            <h1>Home</h1>
                            <Link to='/about'>Go to About</Link>
                        </>
                    )
                }}
                />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )

        const button = screen.getByText(/Go to About/)
        fireEvent.click(button)
        
        const aboutTitle = await screen.findByText('About')

        console.log(screen.debug())

    })
})