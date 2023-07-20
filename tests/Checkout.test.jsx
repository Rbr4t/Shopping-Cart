import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../src/Checkout";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Component renders", () => {
    it("has a title", () => {
        render( 
        <MemoryRouter>
            <Checkout />
        </MemoryRouter>
        )
        expect(screen.getByRole('heading', {name: /Your cart:/i})).toBeInTheDocument()
    });

    it("has all products listed up", () => {
        const data = [{"id":1,"name":"table lamp","price":100,"quantity":3},{"id":3,"name":"salt lamp","price":250,"quantity":1},{"id":2,"name":"night lamp","price":200,"quantity":1}]
        localStorage.setItem('orders', JSON.stringify(data));

        render( 
        <MemoryRouter>
            <Checkout />
        </MemoryRouter>
        )
        
        expect(screen.getAllByRole('row').length).toEqual(4)
    });
})

const localStorageFunc = () => {
    const data = [{"id":1,"name":"table lamp","price":100,"quantity":3},{"id":3,"name":"salt lamp","price":250,"quantity":1},{"id":2,"name":"night lamp","price":200,"quantity":1}]
    localStorage.setItem('orders', JSON.stringify(data));
}

describe('functional parts', () => {
    beforeAll(localStorageFunc)
    it("add additional item", async () => {
        const user = userEvent.setup()
        
        render( 
            <MemoryRouter>
                <Checkout />
            </MemoryRouter>
        )
        const button = screen.getAllByRole('button', {name: '+'})[0]
        await user.click(button)
        screen.debug()
        expect(screen.getByRole('table')).toContainHTML('<td>4</td>')
        
    });

    it("remove additional item", async () => {
        const user = userEvent.setup()
        
        render( 
            <MemoryRouter>
                <Checkout />
            </MemoryRouter>
        )
        const button = screen.getAllByRole('button', {name: '-'})[0]
        await user.click(button)
        screen.debug()
        expect(screen.getByRole('table')).toContainHTML('<td>2</td>')
        
    });

    it("trash an item", async () => {
        const user = userEvent.setup()
        
        render( 
            <MemoryRouter>
                <Checkout />
            </MemoryRouter>
        )
        const button = screen.getAllByRole('button', {name: 'trash'})[0]
        await user.click(button)
        expect(screen.getAllByRole('row').length).toEqual(3)
        
    });

    it("shows cumulative sum", () => {
        const data = [{"id":1,"name":"table lamp","price":100,"quantity":3},{"id":3,"name":"salt lamp","price":250,"quantity":1}]
        localStorage.setItem('orders', JSON.stringify(data));

        render( 
        <MemoryRouter>
            <Checkout />
        </MemoryRouter>
        )
        
        expect(screen.getAllByRole('button')[screen.getAllByRole('button').length-1].textContent).toContain('550')
    });
})