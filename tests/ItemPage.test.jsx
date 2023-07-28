import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemPage from "../src/components/ItemPage";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

vi.mock('react-router-dom', async () => {
    const mod = await vi.importActual('react-router-dom');
    return {
        ...mod,
        useParams: () => ({
            productId: 1
        })
    }
})

describe('visual appearance', () => {
    it('renders with mocking', () => {
        render(
            <MemoryRouter>
                <ItemPage />
            </MemoryRouter>
        )

        expect(screen.getByRole('heading', {level: 2}).textContent).toMatch(/Valentine/i)
    });

    it('contains 2 images, price and availability', () => {
        render(
            <MemoryRouter>
                <ItemPage />
            </MemoryRouter>
        )
        
        expect(screen.getAllByRole('img').length).toEqual(2)
        expect(screen.getByText('84.5 € + VAT'))
        expect(screen.getByText('Availability:'))
    });

    it('has "go back" button', () => {
        render(
            <MemoryRouter>
                <ItemPage />
            </MemoryRouter>
        )
        
        expect(screen.getByRole('button').textContent).toMatch(/←/i)
    });

    it('"go back" button can be clicked', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter>
                <ItemPage />
            </MemoryRouter>
        )
        const button = screen.getByRole('button', {name: '←'})
        await user.click(button)
    });
})