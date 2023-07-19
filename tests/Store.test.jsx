import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Store from "../src/Store";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe('Component renders', () => {
    it("has a title", () => {

        render( 
        <MemoryRouter>
            <Store />
        </MemoryRouter>
        )
        expect(screen.getByRole('heading', {name: /store/i}).textContent).toMatch(/Store/i)
    });

    it("has a navbar", () => {
        render( 
            <MemoryRouter>
                <Store />
            </MemoryRouter>
        )
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Checkout')).toBeInTheDocument()
        expect(screen.getAllByText('Store')[0]).toBeInTheDocument()
    })

    it("renders products", () => {
        render( 
            <MemoryRouter>
                <Store />
            </MemoryRouter>
        )

        expect(screen.getByText('table lamp')).toBeInTheDocument()
        expect(screen.getAllByRole("img")[0]).toBeInTheDocument()
        expect(screen.getAllByRole('button', {name: 'Add to cart'})[0]).toBeInTheDocument()

    })
})

describe('Order data is stored in localStorage', () => {
    it("can add a new order", async() => {
        const user = userEvent.setup()

        render( 
            <MemoryRouter>
                <Store />
            </MemoryRouter>
        )
        const button = screen.getAllByRole('button', {name: 'Add to cart'})[0]
        await user.click(button)
        expect(JSON.parse(localStorage.getItem('orders'))).not.toBeNull()
    });

    it("can add multiple new orders", async() => {
        const user = userEvent.setup()
        localStorage.setItem('orders', null);

        render( 
            <MemoryRouter>
                <Store />
            </MemoryRouter>
        )
        const add = screen.getAllByRole('button', {name: '+'})[0]
        for(let i=0; i<3; i++) {
            await user.click(add)
        }
        
        const button = screen.getAllByRole('button', {name: 'Add to cart'})[0]
        await user.click(button)
        expect(JSON.parse(localStorage.getItem('orders'))[0].quantity).toMatch(/4/i)
    });
})