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

describe('functional parts', () => {
    it()
})